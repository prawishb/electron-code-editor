import React, { useEffect, useCallback } from 'react'
import './Editor.css'

import useCodeMirror from '../useCodeMirror'

interface Props {
  initialDoc: string
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = props => {
  const { onChange } = props
  const handleChange = useCallback(
    state => onChange(state.doc.toString()),
    [onChange]
  )

  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: '',
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView])

  return <div className="editor__wrapper" ref={refContainer}></div>
}

export default Editor
