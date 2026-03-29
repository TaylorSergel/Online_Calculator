# Functional Requirements

## How These Were Derived

To identify the functional requirements, we started with the calculator's core goal:

> "A calculator that performs basic arithmetic on hexadecimal numbers,
> with strict limits on input size, output size, and result validity."

---

## Requirements Table

### Category 1 — Input Handling

| ID | Requirement | Description |
|---|---|---|
| INP-01 | Accept valid hex characters only | Inputs must only contain 0–9 and A–F |
| INP-02 | Limit input to 2 digits | Each operand max 2 hex digits (max: FF) |
| INP-03 | Reject empty input | An empty operand must not be processed |
| INP-04 | Reject non-hex characters | Characters outside 0–9, A–F must be rejected |

### Category 2 — Output Handling

| ID | Requirement | Description |
|---|---|---|
| OUT-01 | Return result in hexadecimal | All results displayed and returned as hex |
| OUT-02 | Limit output to 4 digits | Results exceeding 0xFFFF must be rejected |
| OUT-03 | No negative results | Results below 0 must be rejected |
| OUT-04 | No decimal results | Division must return whole numbers only |

### Category 3 — Arithmetic Operations

| ID | Requirement | Description |
|---|---|---|
| OPS-01 | Addition | Correctly adds two valid hex operands |
| OPS-02 | Subtraction | Correctly subtracts two valid hex operands |
| OPS-03 | Multiplication | Correctly multiplies two valid hex operands |
| OPS-04 | Division | Correctly divides two valid hex operands |

### Category 4 — Error Handling

| ID | Requirement | Description |
|---|---|---|
| ERR-01 | Division by zero | Dividing by 0x00 must return a clear error |
| ERR-02 | Out-of-range result | Results outside 0x0000–0xFFFF return an error |
| ERR-03 | Invalid operation | Unsupported operator returns a clear error |

---

## Requirements Traceability

| Requirement ID | Test Name (added in Section 2) |
|---|---|
| INP-01 | `test_rejects_non_hex_characters` |
| INP-02 | `test_rejects_input_over_two_digits` |
| INP-03 | `test_rejects_empty_input` |
| OUT-03 | `test_rejects_negative_result` |
| OUT-04 | `test_division_returns_integer` |
| ERR-01 | `test_division_by_zero_returns_error` |
| OPS-01 | `test_addition_of_two_hex_numbers` |

> This table will be fully populated at the end of Section 2.