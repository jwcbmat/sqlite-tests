import type {Config} from "jest"

const config: Config = {
    verbose: true,
    "moduleFileExtensions": [
        "js",
        "json",
        "ts"
    ],
    "testRegex": ".spec.ts",
    "transform": {
        "^.+\.(t|j)s$": "ts-jest",
    },
    "collectCoverageFrom": [
        "**/.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
}

export default config