import React from 'react'


const initialData = {
  items: [

    {

      name: "Samsung Galaxy F22 (6GB/128GB)",
      price: "Rs. 23,880",
      description: "Quad Camera 48MP II 9.4mm Thickness II Battery 6000 mAh",
      image: "https://static-01.daraz.com.np/p/c1aee0ca70880f6cc529fed3c58cdcd2.jpg"


    },


    {
      name: "Lava Benco V80 (AE9010)",
      price: "Rs. 13,464",
      description: "II Ram 4GB Storage 64GB II Face Unlock II Rear-mounted Fingerprint",
      image: "https://static-01.daraz.com.np/p/bc1ea5772deb43368708d5e8b78cf8b6.png"
    },
    {

      name: "Redmi Note 11 pro 5G",
      price: "Rs. 36,999",
      description: "Redmi Note 11 pro 5G 108MP Main Game 120Hz FHD+ AMOLED Snapdragon 695",
      image: "https://static-01.daraz.com.np/p/e65e1c2a88b7ad039367b475e50ad623.jpg"

    },

    {

      name: "Lava Benco V80 (AE9010)",
      price: "Rs. 11,680",
      description: "Ram 3GB Storage 32GB II Face Unlock II Rear-mounted Fingerprint",
      image: "https://static-01.daraz.com.np/p/4c6b184034893a16d6cacecb72026a87.png"

    },

    {

      name: "Lava Benco Y11 (1GB/32GB)",
      price: "Rs. 6,550",
      description: "SC7731E 1.3Ghz Quad-Core Processer II Android 11 Go Edition",
      image: "https://static-01.daraz.com.np/p/7af9e3409291a4fca4f32f3c3f6cb9a1.png"

    },

    {

      name: "Micromax IN Note 1 (4GB RAM/128GB ROM)",
      price: "Rs. 20,490",
      description: "(4GB RAM/128GB ROM) 48MP Quad Camera / 6.67\"/ Helio G85 Gaming Phone / 5000 mAh",
      image: "https://static-01.daraz.com.np/p/c0b26eea4197ebd6d8ecec5da4f8141a.jpg"

    },


    {

      name: "Micromax IN Note 1 (4GB RAM)",
      price: "Rs. 18,990",
      description: "(4GB RAM/ 64GB ROM) 48MP Quad Camera 6.67\" Display - Helio G85 Gaming Phone - 5000 mAh",
      image: "https://static-01.daraz.com.np/p/d8bfee8fabd9e842d4cf398fde1fb14d.jpg"

    },

    {

      name: "Apple iPhone 11 - EvoStore",
      price: "Rs. 94,990",
      description: "6.1-inch Liquid Retina HD LCD display",
      image: "https://static-01.daraz.com.np/p/2e22e470eed5042b5a4cd4f2d63ac7fa.png"

    },

    {

      name: "Samsung Galaxy F22",
      price: "Rs. 20,499",
      description: "sAMOLED / 6000 mAh",
      image: "https://static-01.daraz.com.np/p/9753419d726a22444c44a1d7697c81c2.jpg"

    },

    {

      name: "Redmi 9A",
      price: "Rs. 12,999",
      description: "6.53\" Display 5000mAh Battery 13 MP Camera",
      image: "https://static-01.daraz.com.np/p/9180329119843d3b18c872c8975010b0.png"

    },
    {

      name: "realme GT NEO 2",
      price: "Rs. 54,199",
      description: "SD 870 5G Chipset 65W Super Dart Charge",
      image: "https://static-01.daraz.com.np/p/1276e48a3faff6ca4ab86cb025b3485f.png"

    },

    {

      name: "Redmi Note 11 ",
      price: "Rs. 22,999",
      description: "Snapdragon 680 Processor | 50 MP Quad Camera | 33 W pro Fast Charging",
      image: "https://static-01.daraz.com.np/p/752297fed63d00f63f6a24c2d1327ccf.jpg"

    },

    {

      name: "X-AGE G2",
      price: "Rs. 9,499",
      description: "(3 GB RAM/32 GB ROM) Smart Phone Dual Sim 4G Enabled",
      image: "https://static-01.daraz.com.np/p/eeeb8f116086f95fc9d1a26043366dd4.jpg"

    },

    {

      name: "Itel Vision 1 Pro",
      price: "Rs. 11,480",
      description: "3GB RAM + 32GB ROM 6.5\" HD+ Waterdrop Screen",
      image: "https://static-01.daraz.com.np/p/260d57e7897e61eb52b0d4428a8fdeb7.png"

    }
    // at least upto 12  or more 


  ]

}




const FinalItemReducer = (state = initialData, action) => {
  switch (action.type) {

    default:
      return state

  }


  return (
    <div>FinalItemReducer</div>
  )
}

export default FinalItemReducer