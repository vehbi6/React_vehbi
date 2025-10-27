import React from 'react'

function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = React.useState({})
  const [success, setSuccess] = React.useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Valid email is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length === 0) {
      // simulate submit
      setSuccess(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSuccess(false), 3000)
    }
  }

  return (
    <>
      <h1>Contact</h1>

      {success && <p style={{ color: 'green' }}>Message sent — thank you!</p>}

      <form onSubmit={handleSubmit} noValidate style={{ maxWidth: 520 }}>
        <div style={{ marginBottom: 8 }}>
          <label htmlFor="name">Name</label><br />
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{ width: '100%', padding: 8 }}
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label htmlFor="email">Email</label><br />
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: '100%', padding: 8 }}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label htmlFor="message">Message</label><br />
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            style={{ width: '100%', padding: 8 }}
          />
          {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
        </div>

        <button type="submit" style={{ padding: '8px 16px' }}>Send</button>
      </form>
    </>
  )
}

export default Contact