import React from 'react'

const Reference = () => {
  return (
    <div className="ref">
        <div className="lef-ref">
        <ul>
            <li><i class="fa fa-phone" aria-hidden="true"></i> |  number</li>                          //Add number here//
            <li><i class="fa fa-address-book" aria-hidden="true"></i> |  Address</li>                  //Add Mail ID here//
        </ul>
        </div>
        <div className='rig-ref'>
            <ul>
                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
                <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
                <li><i class="fa fa-youtube" aria-hidden="true"></i></li>
            </ul>

        </div>
    </div>
  )
}

export default Reference