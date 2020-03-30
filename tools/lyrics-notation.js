const htmlReg = /\.html$/
const lyricsReg = /<lyrics>(.*?)<\/lyrics>/g

exports.postBuild = function (files) {
  return new Promise(function (resolve, reject) {
    const next = files.map(file => {
      if (file.dest.match(htmlReg)) {
        const markup = file.content.toString('utf8').replace(lyricsReg, function (match, content) {
          return content
            .replace(/(.)\[(.*?)]/gi, function (match, letter, chordRaw) {
              const split = chordRaw.split('^')
              const accent = split[1]
              const chord = split[0]
              let chordMarkup
              if (accent) {
                chordMarkup = chord + '<sup>' + accent + '</sup>'
              } else {
                chordMarkup = chord
              }
              return ('<span class="chord-container">' + letter + '<span class="chord">' + chordMarkup + '</span></span>')
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
