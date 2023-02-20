import { renderHook, RenderHookResult } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useBoolean } from "../../hooks";

describe('GIVEN the method', () => {
  let hook: RenderHookResult<[boolean, () => void, () => void, () => void], unknown>;


  describe('WHEN the initial value is false', () => {
    beforeEach(() => {
      hook = renderHook(() => useBoolean(false));
    });

    test('THEN the value should be the false', () => {
      expect(hook.result.current[0]).toEqual(false);
    });

    describe('WHEN the setTrue method is called', () => {
      beforeEach(() => {
        act(() => {
          hook.result.current[1]();
        });
      });

      test('THEN the value should be true', () => {
        expect(hook.result.current[0]).toEqual(true);
      });
    });

    describe('WHEN the setFalse method is called', () => {
      beforeEach(() => {
        act(() => {
          hook.result.current[2]();
        });
      });

      test('THEN the value should be false', () => {
        expect(hook.result.current[0]).toEqual(false);
      });
    });

    describe('WHEN the toggle method is called', () => {
      beforeEach(() => {
        act(() => {
          hook.result.current[3]();
        });
      });

      test('THEN the value should be true', () => {
        expect(hook.result.current[0]).toEqual(true);
      });
    });
  });

  describe('WHEN the initial value is true', () => {
    beforeEach(() => {
      hook = renderHook(() => useBoolean(true));
    });

    test('THEN the value should be the true', () => {
      expect(hook.result.current[0]).toEqual(true);
    });

    describe('WHEN the setTrue method is called', () => {
      beforeEach(() => {
        act(() => {
          hook.result.current[1]();
        });
      });

      test('THEN the value should be true', () => {
        expect(hook.result.current[0]).toEqual(true);
      });
    });

    describe('WHEN the setFalse method is called', () => {
      beforeEach(() => {
        act(() => {
          hook.result.current[2]();
        });
      });

      test('THEN the value should be false', () => {
        expect(hook.result.current[0]).toEqual(false);
      });
    });

    describe('WHEN the toggle method is called', () => {
      beforeEach(() => {
        act(() => {
          hook.result.current[3]();
        });
      });

      test('THEN the value should be false', () => {
        expect(hook.result.current[0]).toEqual(false);
      });
    });
  });
});