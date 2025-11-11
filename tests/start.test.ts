/* eslint-disable @typescript-eslint/no-var-requires */
import { Server } from "http"

const mockListen = jest.fn((port: number, callback: () => void) => {
  if (callback) {
    callback()
  }
  return {} as Server
})

jest.mock("../src/server", () => ({
  __esModule: true,
  default: {
    listen: mockListen,
  },
}))

describe("Server startup script (index.ts)", () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV }
    mockListen.mockClear()
  })

  afterAll(() => {
    process.env = OLD_ENV
  })

  it('should start the server when NODE_ENV is not "test"', () => {
    process.env.NODE_ENV = "development"
    require("../src/index")
    expect(mockListen).toHaveBeenCalledWith(8080, expect.any(Function))
  })

  it('should not start the server when NODE_ENV is "test"', () => {
    process.env.NODE_ENV = "test"
    require("../src/index")
    expect(mockListen).not.toHaveBeenCalled()
  })
})