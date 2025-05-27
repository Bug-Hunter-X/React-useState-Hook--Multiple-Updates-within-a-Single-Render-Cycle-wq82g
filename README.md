# React useState Hook: Unexpected Behavior with Multiple Updates

This repository demonstrates a subtle issue related to how React's `useState` hook handles multiple updates within a single render cycle.  The problem arises when the `setCount` function is called multiple times in quick succession within the same event handler. While React does batch updates, the behavior might not be intuitive if not understood.

## Problem Description

The `bug.js` file contains a component that increments a counter.  Two calls to `setCount` are made within a single `handleClick` function.  One would expect the counter to increase by 2.  However, due to how React's update mechanism works, this will not happen. Only the last state update value will reflect.