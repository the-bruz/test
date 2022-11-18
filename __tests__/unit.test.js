// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber #1', () => {
    expect(functions.isPhoneNumber("400-823-8823")).toBe(true);
});

test('isPhoneNumber #2', () => {
    expect(functions.isPhoneNumber("400-123-4432")).toBe(true);
});

test('isPhoneNumber #3', () => {
    expect(functions.isPhoneNumber("8823-400-823")).toBe(false);
});

test('isPhoneNumber #4', () => {
    expect(functions.isPhoneNumber("823882400")).toBe(false);
});


test('isEmail #1', () => {
    expect(functions.isEmail("ucsd@ucsd.edu")).toBe(true);
});

test('isEmail #2', () => {
    expect(functions.isEmail("username@domain.com")).toBe(true);
});

test('isEmail #3', () => {
    expect(functions.isEmail("google.com")).toBe(false);
});

test('isEmail #4', () => {
    expect(functions.isEmail("ucsd@www.ucsd.edu")).toBe(false);
});


test('isStrongPassword #1', () => {
    expect(functions.isStrongPassword("IamComplicated")).toBe(true);
});

test('isStrongPassword #2', () => {
    expect(functions.isStrongPassword("AreYouCom")).toBe(true);
});

test('isStrongPassword #3', () => {
    expect(functions.isStrongPassword("we")).toBe(false);
});

test('isStrongPassword #4', () => {
    expect(functions.isStrongPassword("ak")).toBe(false);
});


test('isDate #1', () => {
    expect(functions.isDate("01/12/2025")).toBe(true);
});

test('isDate #2', () => {
    expect(functions.isDate("19/95/6985")).toBe(true);
});

test('isDate #3', () => {
    expect(functions.isDate("1/1/24")).toBe(false);
});

test('isDate #4', () => {
    expect(functions.isDate("01/01/22")).toBe(false);
});


test('isHexColor #1', () => {
    expect(functions.isHexColor("123456")).toBe(true);
});

test('isHexColor #2', () => {
    expect(functions.isHexColor("ABCDEF")).toBe(true);
});

test('isHexColor #3', () => {
    expect(functions.isHexColor("12345")).toBe(false);
});

test('isHexColor #4', () => {
    expect(functions.isHexColor("ABCDEX")).toBe(false);
});