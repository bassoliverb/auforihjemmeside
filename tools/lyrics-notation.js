const htmlReg = /\.html$/
const lyricsReg = /<lyrics>(.*?)<\/lyrics>/g

exports.postBuild = function (files) {
  return new Promise(function (resolve, reject) {
    const next = files.map(file => {
      if (file.dest.match(htmlReg)) {
        const markup = file.content.toString('utf8').replace(lyricsReg, function (match, content) {
          return content
            .replace(/(.)\[(.*?)]/gi, function (match, letter, chordRaw) {
              const allChordsMarkup = chordRaw.split(',').map(singleChordRaw => {
                const singleChordSplit = chordRaw.split('^')
                const sup = singleChordSplit[1]
                const chord = singleChordSplit[0]

                let chordMarkup
                if (sup) {
                  const supSplit = sup.split('_')
                  chordMarkup = chord + '<sup>' + supSplit[0] + '</sup>' + (supSplit[1] || '')
                } else {
                  chordMarkup = chord
                }
                return ('<span class="chord">' + chordMarkup + '</span>')
              })

              let finalMarkup
              if (allChordsMarkup.length > 1) {
                finalMarkup = '<span class="chord-container">' + letter + '<span class="chord-track">' + allChordsMarkup.join('') + '</span></span>'
              } else {
                finalMarkup = '<span class="chord-container">' + letter + allChordsMarkup[0] + '</span>'
              }
              return finalMarkup
                .replace(/#/g, '<span class="sharp"></span>')
                .replace(/b/g, '<span class="flat"></span>')
            })
        })

        return Object.assign({}, file, {
          content: Buffer.from(markup)
        })
      }
      return file
    })

    resolve(next)
  })
}
