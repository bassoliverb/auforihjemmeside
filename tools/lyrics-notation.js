const htmlReg = /\.html$/
const lyricsReg = /<lyrics>(.*?)<\/lyrics>/g

exports.postBuild = function (files) {
  return new Promise(function (resolve, reject) {
    const next = files.map(file => {
      if (file.dest.match(htmlReg)) {
        const markup = file.content.toString('utf8').replace(lyricsReg, function (match, content) {
          return content
            .replace(/(.)\[(.*?)]/gi, function (match, letter, chord) {
              return '<span class="chord-container">' + letter + '<span class="chord">' + chord + '</span></span>'
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
