interface IHtmlViewer {
  data: string;
}


export default function HtmlViewer({ data }: IHtmlViewer) {
  return (
    <div>{data}</div>
  )
}
