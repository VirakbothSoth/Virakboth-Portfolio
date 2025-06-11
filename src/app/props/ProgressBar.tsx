interface ProgressProp {
  color: string
  width: string
}

const ProgressBar: React.FC<ProgressProp> = ({ color, width }) => {
  return (
    <div className="flex mb-2 items-center justify-between">
      <div className="bg-bg rounded-full h-2.5 w-full">
        <div className={`bg-${color} h-2.5 rounded-full`} style={{ width: `${width}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar