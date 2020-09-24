import React from 'react';
import { isMono } from './isMono';
import * as assert from 'assert';

describe('test isMono function', () => {
  // GOOD

  test('[1, 2, 3]', () => {
    const result = isMono([1, 2, 3]);
    assert.strictEqual(result, true);
  });

  test('[0, 2, 4]', () => {
    const result = isMono([0, 2, 4]);
    assert.strictEqual(result, true)
  })

  test('[1, 4, 7]', () => {
    const result = isMono([1, 4, 7]);
    assert.strictEqual(result, true)
  })

  test('[7, 4, 1]', () => {
    const result = isMono([7, 4, 1]);
    assert.strictEqual(result, true)
  })

  test('[3, 0, -3]', () => {
    const result = isMono([3, 0, -3]);

    assert.strictEqual(result, true)
  })

  test('[-1, -3, -5]', () => {
    const result = isMono([-1, -3, -5]);
    assert.strictEqual(result, true)
  })

  test('[3, 3, 3]', () => {
    const result = isMono([3, 3, 3]);
    assert.strictEqual(result, true)
  })

  test('[0, 0, 0]', () => {
    const result = isMono([0, 0, 0]);
    assert.strictEqual(result, true)
  })

  test('[-4]', () => {
    const result = isMono([-4]);
    assert.strictEqual(result, true)
  })

  test('[-4, 4]', () => {
    const result = isMono([-4, 4]);
    assert.strictEqual(result, true)
  })

  // Добавьте сюда ваши тесты

  test('[0, 1, 3]', () => {
    const result = isMono([0, 1, 3]);
    assert.strictEqual(result, false)
  })

  test('[1, 4, 8]', () => {
    const result = isMono([1, 4, 8]);
    assert.strictEqual(result, false)
  })

  test('[1, 4, 1]', () => {
    const result = isMono([1, 4, 1]);
    assert.strictEqual(result, false)
  })

  test('[4, 1, 4]', () => {
    const result = isMono([4, 1, 4]);
    assert.strictEqual(result, false)
  })

  test('[-4, 4, 5]', () => {
    const result = isMono([-4, 4, 5]);
    assert.strictEqual(result, false)
  })


})

