const Section = ({ nom, nom_id, children }) => {
  return (
    <section className={nom} id={nom_id}>
      <div className='content'>{children}</div>
    </section>
  )
}

export default Section
