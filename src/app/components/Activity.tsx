const Activity = () => {
  return (
    <section className="py-80">
      <div className="pb-20">
        <h2 className="section-title">
          Activity
        </h2>
        <p><em>I added this for fun, like my GitHub activity</em></p>
      </div>
      <div className="activity-widget-div flex justify-center">
        <img 
          src="https://github-profile-trophy.vercel.app/?username=VirakbothSoth&theme=darkhub&row=2&column=4"
          alt="My Trophies"
        />
        <img 
          src="https://github-readme-stats.vercel.app/api?username=VirakbothSoth&show_icons=true&theme=radical" 
          alt=""
        />
      </div>
    </section>
  )
}

export default Activity