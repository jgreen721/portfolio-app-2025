import React from 'react'
import "./Map.css"



const Map =()=> {



  return   (
 <section className="mapbox" data-mapbox>
    <figure>
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26441.605104912782!2d-118.32552467133185!3d34.064370624560965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8a16add859f%3A0x1d371572091080c2!2sKoreatown%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1742144506354!5m2!1sen!2sus" loading="lazy"></iframe>
    </figure>
</section>
  )
}

export default React.memo(Map)