const iframe = (node) => {
    return [
      {
        type: "openTag",
        tagName: "iframe",
        outerNewLine: true,
        attributes: node.attrs,
      },
      { type: "html", content: node.childrenHTML },
      { type: "closeTag", tagName: "iframe", outerNewLine: false }
    ]}
export default iframe;