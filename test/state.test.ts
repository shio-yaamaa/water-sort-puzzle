import { State, Tube, Water } from "../src/types";
import {
  stringifyTubes,
  isStateComplete,
  yieldChildStates,
} from "../src/state";

describe("isStateComplete", () => {
  test("When complete", () => {
    const state: State = {
      tubes: [
        {
          waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
        },
        {
          waters: [Water.PINK, Water.PINK, Water.PINK, Water.PINK],
        },
        {
          waters: [Water.BLUE, Water.BLUE, Water.BLUE, Water.BLUE],
        },
      ],
      history: new Set(),
    };
    expect(isStateComplete(state)).toBeTruthy();
  });

  test("When not complete", () => {
    const state: State = {
      tubes: [
        {
          waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.BLUE],
        },
        {
          waters: [Water.PINK, Water.PINK, Water.PINK, Water.PINK],
        },
        {
          waters: [Water.EMPTY, Water.BLUE, Water.BLUE, Water.BLUE],
        },
      ],
      history: new Set(),
    };
    expect(isStateComplete(state)).toBeFalsy();
  });
});

describe("yieldChildStates", () => {
  test("When complete", () => {
    const state: State = {
      tubes: [
        {
          waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
        },
        {
          waters: [Water.PINK, Water.PINK, Water.PINK, Water.PINK],
        },
        {
          waters: [Water.BLUE, Water.BLUE, Water.BLUE, Water.BLUE],
        },
      ],
      history: new Set(),
    };
    expect(yieldChildStates(state)).toStrictEqual([]);
  });

  test("When stuck", () => {
    const state: State = {
      tubes: [
        {
          waters: [Water.PINK, Water.GREEN, Water.BLUE, Water.GRAY],
        },
        {
          waters: [Water.GREEN, Water.BLUE, Water.GRAY, Water.PINK],
        },
        {
          waters: [Water.BLUE, Water.GRAY, Water.PINK, Water.GREEN],
        },
      ],
      history: new Set(),
    };
    expect(yieldChildStates(state)).toStrictEqual([]);
  });

  test("When there are multiple possible transfers", () => {
    const state: State = {
      tubes: [
        {
          waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
        },
        {
          waters: [Water.EMPTY, Water.PINK, Water.GREEN, Water.GREEN],
        },
        {
          waters: [Water.EMPTY, Water.PINK, Water.GRAY, Water.GRAY],
        },
      ],
      history: new Set(),
    };
    expect(yieldChildStates(state)).toStrictEqual([
      {
        tubes: [
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.PINK],
          },
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.GREEN, Water.GREEN],
          },
          {
            waters: [Water.EMPTY, Water.PINK, Water.GRAY, Water.GRAY],
          },
        ],
        history: new Set([stringifyTubes(state.tubes)]),
      },
      {
        tubes: [
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
          },
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.GREEN, Water.GREEN],
          },
          {
            waters: [Water.PINK, Water.PINK, Water.GRAY, Water.GRAY],
          },
        ],
        history: new Set([stringifyTubes(state.tubes)]),
      },
      {
        tubes: [
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.PINK],
          },
          {
            waters: [Water.EMPTY, Water.PINK, Water.GREEN, Water.GREEN],
          },
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.GRAY, Water.GRAY],
          },
        ],
        history: new Set([stringifyTubes(state.tubes)]),
      },
      {
        tubes: [
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
          },
          {
            waters: [Water.PINK, Water.PINK, Water.GREEN, Water.GREEN],
          },
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.GRAY, Water.GRAY],
          },
        ],
        history: new Set([stringifyTubes(state.tubes)]),
      },
    ]);
  });

  test("When one of the possible transfers is already in history", () => {
    const state: State = {
      tubes: [
        {
          waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
        },
        {
          waters: [Water.EMPTY, Water.PINK, Water.GREEN, Water.GREEN],
        },
        {
          waters: [Water.EMPTY, Water.PINK, Water.GRAY, Water.GRAY],
        },
      ],
      history: new Set(),
    };
    const tubeInHistory: Tube[] = [
      {
        waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.PINK],
      },
      {
        waters: [Water.EMPTY, Water.EMPTY, Water.GREEN, Water.GREEN],
      },
      {
        waters: [Water.EMPTY, Water.PINK, Water.GRAY, Water.GRAY],
      },
    ];
    state.history.add(stringifyTubes(tubeInHistory));
    expect(yieldChildStates(state)).toStrictEqual([
      {
        tubes: [
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
          },
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.GREEN, Water.GREEN],
          },
          {
            waters: [Water.PINK, Water.PINK, Water.GRAY, Water.GRAY],
          },
        ],
        history: new Set([
          stringifyTubes(tubeInHistory),
          stringifyTubes(state.tubes),
        ]),
      },
      {
        tubes: [
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.PINK],
          },
          {
            waters: [Water.EMPTY, Water.PINK, Water.GREEN, Water.GREEN],
          },
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.GRAY, Water.GRAY],
          },
        ],
        history: new Set([
          stringifyTubes(tubeInHistory),
          stringifyTubes(state.tubes),
        ]),
      },
      {
        tubes: [
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
          },
          {
            waters: [Water.PINK, Water.PINK, Water.GREEN, Water.GREEN],
          },
          {
            waters: [Water.EMPTY, Water.EMPTY, Water.GRAY, Water.GRAY],
          },
        ],
        history: new Set([
          stringifyTubes(tubeInHistory),
          stringifyTubes(state.tubes),
        ]),
      },
    ]);
  });
});
