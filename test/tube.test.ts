import { Tube, Water } from "../src/types";
import { stringifyTube, isTubeComplete, pourMaximum } from "../src/tube";

describe("stringifyTube", () => {
  test("can stringify correctly", () => {
    const tube: Tube = {
      waters: [Water.EMPTY, Water.PINK, Water.PINK, Water.BLUE],
    };
    expect(stringifyTube(tube)).toBe("empty,pink,pink,blue");
  });

  test("stringifies the same tubes to the same string", () => {
    const tube1: Tube = {
      waters: [Water.PURPLE, Water.LIME, Water.PINK, Water.BLUE],
    };
    const tube2: Tube = {
      waters: [Water.PURPLE, Water.LIME, Water.PINK, Water.BLUE],
    };
    expect(stringifyTube(tube1)).toBe(stringifyTube(tube2));
  });

  test("stringifies different tubes to different strings", () => {
    const tube1: Tube = {
      waters: [Water.PURPLE, Water.LIME, Water.PINK, Water.BLUE],
    };
    const tube2: Tube = {
      waters: [Water.PURPLE, Water.LIME, Water.RED, Water.BLUE],
    };
    expect(stringifyTube(tube1)).not.toBe(stringifyTube(tube2));
  });
});

describe("isTubeComplete", () => {
  test("When the tube is filled with the same water", () => {
    const tube: Tube = {
      waters: [Water.PURPLE, Water.PURPLE, Water.PURPLE, Water.PURPLE],
    };
    expect(isTubeComplete(tube)).toBeTruthy();
  });

  test("When the tube has only a single color but not filled", () => {
    const tube: Tube = {
      waters: [Water.EMPTY, Water.PURPLE, Water.PURPLE, Water.PURPLE],
    };
    expect(isTubeComplete(tube)).toBeFalsy();
  });

  test("When the tube is empty", () => {
    const tube: Tube = {
      waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
    };
    expect(isTubeComplete(tube)).toBeTruthy();
  });
});

describe("pourMaximum", () => {
  describe("When transfer is not possible", () => {
    test("When the source tube is empty", () => {
      const source: Tube = {
        waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
      };
      const destination: Tube = {
        waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
      };
      const [updatedSource, updatedDestination, isSuccessful] = pourMaximum(
        source,
        destination
      );
      expect(updatedSource).toStrictEqual(source);
      expect(updatedDestination).toStrictEqual(destination);
      expect(isSuccessful).toBeFalsy();
    });

    test("When the destination tube is full", () => {
      const source: Tube = {
        waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.PINK],
      };
      const destination: Tube = {
        waters: [Water.PINK, Water.PINK, Water.PINK, Water.PINK],
      };
      const [updatedSource, updatedDestination, isSuccessful] = pourMaximum(
        source,
        destination
      );
      expect(updatedSource).toStrictEqual(source);
      expect(updatedDestination).toStrictEqual(destination);
      expect(isSuccessful).toBeFalsy();
    });

    test("When water types do not match", () => {
      const source: Tube = {
        waters: [Water.EMPTY, Water.EMPTY, Water.BLUE, Water.PINK],
      };
      const destination: Tube = {
        waters: [Water.EMPTY, Water.EMPTY, Water.PINK, Water.BLUE],
      };
      const [updatedSource, updatedDestination, isSuccessful] = pourMaximum(
        source,
        destination
      );
      expect(updatedSource).toStrictEqual(source);
      expect(updatedDestination).toStrictEqual(destination);
      expect(isSuccessful).toBeFalsy();
    });
  });

  describe("When transfer is possible", () => {
    test("When the destination tube is empty and accepts any water type", () => {
      const source: Tube = {
        waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.PINK],
      };
      const destination: Tube = {
        waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
      };
      const [updatedSource, updatedDestination, isSuccessful] = pourMaximum(
        source,
        destination
      );
      expect(updatedSource).toStrictEqual({
        waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.EMPTY],
      });
      expect(updatedDestination).toStrictEqual({
        waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.PINK],
      });
      expect(isSuccessful).toBeTruthy();
    });

    test("When water types match", () => {
      const source: Tube = {
        waters: [Water.EMPTY, Water.EMPTY, Water.PINK, Water.BLUE],
      };
      const destination: Tube = {
        waters: [Water.EMPTY, Water.EMPTY, Water.PINK, Water.BLUE],
      };
      const [updatedSource, updatedDestination, isSuccessful] = pourMaximum(
        source,
        destination
      );
      expect(updatedSource).toStrictEqual({
        waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.BLUE],
      });
      expect(updatedDestination).toStrictEqual({
        waters: [Water.EMPTY, Water.PINK, Water.PINK, Water.BLUE],
      });
      expect(isSuccessful).toBeTruthy();
    });

    test("When partial transfer is possible", () => {
      const source: Tube = {
        waters: [Water.PINK, Water.PINK, Water.PINK, Water.BLUE],
      };
      const destination: Tube = {
        waters: [Water.EMPTY, Water.PINK, Water.BLUE, Water.BLUE],
      };
      const [updatedSource, updatedDestination, isSuccessful] = pourMaximum(
        source,
        destination
      );
      expect(updatedSource).toStrictEqual({
        waters: [Water.EMPTY, Water.PINK, Water.PINK, Water.BLUE],
      });
      expect(updatedDestination).toStrictEqual({
        waters: [Water.PINK, Water.PINK, Water.BLUE, Water.BLUE],
      });
      expect(isSuccessful).toBeTruthy();
    });

    test("When different type of water is in the middle", () => {
      const source: Tube = {
        waters: [Water.PINK, Water.BLUE, Water.PINK, Water.BLUE],
      };
      const destination: Tube = {
        waters: [Water.EMPTY, Water.EMPTY, Water.EMPTY, Water.PINK],
      };
      const [updatedSource, updatedDestination, isSuccessful] = pourMaximum(
        source,
        destination
      );
      expect(updatedSource).toStrictEqual({
        waters: [Water.EMPTY, Water.BLUE, Water.PINK, Water.BLUE],
      });
      expect(updatedDestination).toStrictEqual({
        waters: [Water.EMPTY, Water.EMPTY, Water.PINK, Water.PINK],
      });
      expect(isSuccessful).toBeTruthy();
    });
  });
});
