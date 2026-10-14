"use client"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Check, X } from "lucide-react"
import React, { useState } from "react"
import { BlocksDisplay } from "@/components/blocks-display"
import { Separator } from "@/components/ui/separator"

export default function Page() {

  const [enteredWord, setEnteredWord] = useState<string>("")
  const [displayedWord, setDisplayedWord] = useState<string>("")

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredWord(e.target.value)
  }

  const enteredWordIsValid = enteredWord.length > 0 && /^[a-zA-Z]+$/.test(enteredWord)

  const onPlayClick = () => {
    setDisplayedWord(enteredWord.toUpperCase())
  }

  const onClearClick = () => {
    //setEnteredWord("")
    setDisplayedWord("")
  }

  return (
    <>
      <Field>
        <FieldLabel htmlFor="word-input" className="mt-4">
          Word
        </FieldLabel>
        <Input
          id="word-input"
          type="text"
          placeholder="Sheridan"
          className="max-w-50"
          value={enteredWord}
          onChange={onInputChange}
        />
        <FieldDescription>
          Enter one word. Use only letters, no spaces.
        </FieldDescription>
      </Field>
      <Button
        disabled={!enteredWordIsValid}
        onClick={onPlayClick}
        className="my-4 bg-blue-600 text-white hover:bg-blue-700"
      >
        Play
        <Check className="ml-2 h-4 w-4" />
      </Button>
      <Separator className="my-4" />
      {displayedWord && (
        <>
          <BlocksDisplay word={displayedWord} />
          <Button
            onClick={onClearClick}
            variant="outline"
            className="mt-4 border-amber-500 text-amber-600 hover:bg-amber-50 hover:text-amber-700"
          >
            Clear
            <X className="ml-2 h-4 w-4" />
          </Button>
        </>
      )}
    </>
  )
}
