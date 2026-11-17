export default function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end">
      <div>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="section-title max-w-2xl">{title}</h2>
      </div>
      {note && <p className="max-w-xs text-sm leading-7 text-muted">{note}</p>}
    </div>
  )
}
