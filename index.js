#!/usr/bin/env node
import path from "node:path"
import minimist from "minimist"
import { Plop, run } from "plop"

const args = process.argv.slice(2)
const argv = minimist(args)

import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const configPath = path.join(__dirname, "plop/scripts/plopfile.js")

Plop.prepare(
    {
        cwd: argv.cwd,
        configPath,
        preload: argv.preload || [],
        completion: argv.completion,
    },
    env => Plop.execute(env, run)
)
