import { PiNotepadFill } from "react-icons/pi"

const Notes = () => {
  return (
    <section className="p-40">
      <div className="container mx-auto">
        <h2 className="section-title"><PiNotepadFill/> Personal Notes</h2>
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="note-card">
            <h3 className="text-3xl font-bold mb-[50px]">thoughts.txt</h3>
            <div className="bg-gray-800 rounded-lg">
              <div className="journey-container">
                <div className="pl-3">
                <p>
                  I want to get a .dev domain for my portfolio, but I don't think it's worth it right now.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notes
