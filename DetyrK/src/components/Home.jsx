import React from 'react'

function Home() {
  const containerStyle = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: '20px'
  }

  const cardStyle = {
    flex: '1 1 220px',
    maxWidth: '300px',
    boxSizing: 'border-box',
    textAlign: 'center'
  }

  const imgStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '8px'
  }

  const titleStyle = {
    margin: '12px 0 8px'
  }

  const textStyle = {
    margin: 0,
    lineHeight: 1.4,
    color: '#fff'
  }

  const items = [
    { src: 'Flija.webp', alt: 'Flija', title: 'Flija', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
    { src: 'Spec.webp', alt: 'Spec', title: 'Spec', text: 'Ad cum optio accusamus voluptas totam aspernatur.' },
    { src: 'Pite.webp', alt: 'Pite', title: 'Pite', text: 'Libero molestiae dolores impedit qui officiis unde sit.' }
  ]

  return (
    <>
      <h1>Home Page</h1>

      <div style={containerStyle}>
        {items.map((item, idx) => (
          <figure key={idx} style={cardStyle}>
            <img src={item.src} alt={item.alt} style={imgStyle} />
            <h2 style={titleStyle}>{item.title}</h2>
            <p style={textStyle}>{item.text}</p>
          </figure>
        ))}
      </div>
    </>
  )
}

export default Home