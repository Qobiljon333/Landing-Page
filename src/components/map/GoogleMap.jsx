import React from 'react'

const GoogleMap = () => {
  return (
    <div>
         <iframe
         className='w-full'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9782.950250986414!2d71.67283784138014!3d40.99843782546042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4dba0d667c2f%3A0xf12782376ea39733!2sNamangan!5e0!3m2!1suz!2skr!4v1661172157731!5m2!1suz!2skr"
              width="300"
              height="450"
              title="bizning manzil"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
    </div>
  )
}

export default GoogleMap