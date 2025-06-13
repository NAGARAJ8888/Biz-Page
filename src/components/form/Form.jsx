import React from 'react'


export const Form = () => {
  return (
    <div className="card shadow-sm p-4 rounded-0 mt-5" style={{ maxWidth: "80%", margin: "20px auto" }}>
  <form>
    {/* Row 1: Name and Email */}
    <div className="row mb-3">
      <div className="col">
        <input  
          type="text" 
          className="form-control rounded-0" 
          id="name" 
          placeholder="Your Name" 
        />
      </div>
      <div className="col">
        <input  
          type="email" 
          className="form-control rounded-0" 
          id="email" 
          placeholder="Your Email" 
        />
      </div>
    </div>

    {/* Row 2: Subject */}
    <div className="mb-3">
      <input  
        type="text" 
        className="form-control rounded-0" 
        id="subject" 
        placeholder="Subject" 
      />
    </div>

    {/* Row 3: Message */}
    <div className="mb-3">
      <textarea 
        className="form-control rounded-0" 
        id="message" 
        rows="4" 
        placeholder="Your Message"
      ></textarea>
    </div>

    {/* Submit Button Row */}
    <div className="text-center">
      <button type="submit" className="btn rounded-0 text-white" style={{padding:"10px 50px", backgroundColor:"#67B26F"}}>
        Send Message
      </button>
    </div>
  </form>
</div>

  )
}
