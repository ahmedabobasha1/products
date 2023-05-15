import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import data from '../../assets/json/products-list.json';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
//   products : Product[]= [
//     {
//       "id":1,
//       "name":"iphone 14 pro",
//       "image":"../../assets/iphone 14 pro.webp",
//       "price":23,
//       "date":"2023-2-4",
//       "description":"Apple iPhone 14 with FaceTime App - 128 GB, 4 GB RAM, 4G LTE, 1 SIM and 1 E-SIM - MWM22J/A",
//       "color":"blue",
//       "count":0,
//       "aboutItem":"6.7-inch Super Retina XDR display features Always On and ProMotion Dynamic Island, a magical new way to interact with iPhone48MP main camera with up to 4 times greater resolution Cinematic mode now in Dolby Vision in 4K resolution at up to 30fpsMotion mode for smooth, steady, handheld videosVital Safety Features - Satellite emergency function and collision detectionAll-day battery life and up to 29 hours of video playbackA16 Bionic chip, the ultimate smartphone chip. Ultra-fast cellular network, 5G networkIndustry leading durability features with ceramic shield and water resistance"

//   },
//   {
//     "id":2,
//     "name":"app watch ultra",
//     "image":"../../assets/app watch ultra.webp",
//     "price":23,
//     "date":"2023-2-4",
//     "description":"Apple iPhone 14 with FaceTime App - 128 GB, 4 GB RAM, 4G LTE, 1 SIM and 1 E-SIM - MWM22J/A",
//     "color":"blue",
//     "count":1,
//     "aboutItem":"6.7-inch Super Retina XDR display features Always On and ProMotion Dynamic Island, a magical new way to interact with iPhone48MP main camera with up to 4 times greater resolution Cinematic mode now in Dolby Vision in 4K resolution at up to 30fpsMotion mode for smooth, steady, handheld videosVital Safety Features - Satellite emergency function and collision detectionAll-day battery life and up to 29 hours of video playbackA16 Bionic chip, the ultimate smartphone chip. Ultra-fast cellular network, 5G networkIndustry leading durability features with ceramic shield and water resistance"



// },
// {
//   "id":3,
//   "name":"mackbook pro",
//   "image":"../../assets/mackbook pro.webp",
//   "price":23,
//   "date":"2023-2-4",
//   "description":"Apple iPhone 14 with FaceTime App - 128 GB, 4 GB RAM, 4G LTE, 1 SIM and 1 E-SIM - MWM22J/A",
//   "color":"blue",
//   "count":0,
//   "aboutItem":"6.7-inch Super Retina XDR display features Always On and ProMotion Dynamic Island, a magical new way to interact with iPhone48MP main camera with up to 4 times greater resolution Cinematic mode now in Dolby Vision in 4K resolution at up to 30fpsMotion mode for smooth, steady, handheld videosVital Safety Features - Satellite emergency function and collision detectionAll-day battery life and up to 29 hours of video playbackA16 Bionic chip, the ultimate smartphone chip. Ultra-fast cellular network, 5G networkIndustry leading durability features with ceramic shield and water resistance"



// },
// {
//   "id":4,
//   "name":"apple watch",
//   "image":"../../assets/apple watch .webp",
//   "price":23,
//   "date":"2023-2-4",
//   "description":"Apple iPhone 14 with FaceTime App - 128 GB, 4 GB RAM, 4G LTE, 1 SIM and 1 E-SIM - MWM22J/A",
//   "color":"blue",
//   "count":1,
//   "aboutItem":"6.7-inch Super Retina XDR display features Always On and ProMotion Dynamic Island, a magical new way to interact with iPhone48MP main camera with up to 4 times greater resolution Cinematic mode now in Dolby Vision in 4K resolution at up to 30fpsMotion mode for smooth, steady, handheld videosVital Safety Features - Satellite emergency function and collision detectionAll-day battery life and up to 29 hours of video playbackA16 Bionic chip, the ultimate smartphone chip. Ultra-fast cellular network, 5G networkIndustry leading durability features with ceramic shield and water resistance"



// },
// {
//   "id":5,
//   "name":"iphone 14 pro",
//   "image":"../../assets/iphone 14 pro.webp",
//   "price":23,
//   "date":"2023-2-4",
//   "description":"Apple iPhone 14 with FaceTime App - 128 GB, 4 GB RAM, 4G LTE, 1 SIM and 1 E-SIM - MWM22J/A",
//   "color":"blue",
//   "count":0,
//   "aboutItem":"6.7-inch Super Retina XDR display features Always On and ProMotion Dynamic Island, a magical new way to interact with iPhone48MP main camera with up to 4 times greater resolution Cinematic mode now in Dolby Vision in 4K resolution at up to 30fpsMotion mode for smooth, steady, handheld videosVital Safety Features - Satellite emergency function and collision detectionAll-day battery life and up to 29 hours of video playbackA16 Bionic chip, the ultimate smartphone chip. Ultra-fast cellular network, 5G networkIndustry leading durability features with ceramic shield and water resistance"



// },
// {
//   "id":6,
//   "name":"iphone 14 pro",
//   "image":"../../assets/iphone 14 pro.webp",
//   "price":23,
//   "date":"2023-2-4",
//   "description":"Apple iPhone 14 with FaceTime App - 128 GB, 4 GB RAM, 4G LTE, 1 SIM and 1 E-SIM - MWM22J/A",
//   "color":"blue",
//   "count":1,
//   "aboutItem":"6.7-inch Super Retina XDR display features Always On and ProMotion Dynamic Island, a magical new way to interact with iPhone48MP main camera with up to 4 times greater resolution Cinematic mode now in Dolby Vision in 4K resolution at up to 30fpsMotion mode for smooth, steady, handheld videosVital Safety Features - Satellite emergency function and collision detectionAll-day battery life and up to 29 hours of video playbackA16 Bionic chip, the ultimate smartphone chip. Ultra-fast cellular network, 5G networkIndustry leading durability features with ceramic shield and water resistance"



// },
// {
//   "id":7,
//   "name":"iphone 14 pro",
//   "image":"../../assets/iphone 14 pro.webp",
//   "price":23,
//   "date":"2023-2-4",
//   "description":"Apple iPhone 14 with FaceTime App - 128 GB, 4 GB RAM, 4G LTE, 1 SIM and 1 E-SIM - MWM22J/A",
//   "color":"blue",
//   "count":0,
//   "aboutItem":"6.7-inch Super Retina XDR display features Always On and ProMotion Dynamic Island, a magical new way to interact with iPhone48MP main camera with up to 4 times greater resolution Cinematic mode now in Dolby Vision in 4K resolution at up to 30fpsMotion mode for smooth, steady, handheld videosVital Safety Features - Satellite emergency function and collision detectionAll-day battery life and up to 29 hours of video playbackA16 Bionic chip, the ultimate smartphone chip. Ultra-fast cellular network, 5G networkIndustry leading durability features with ceramic shield and water resistance"



// },
// {
//   "id":8,
//   "name":"iphone 14 pro",
//   "image":"../../assets/iphone 14 pro.webp",
//   "price":23,
//   "date":"2023-2-4",
//   "description":"Apple iPhone 14 with FaceTime App - 128 GB, 4 GB RAM, 4G LTE, 1 SIM and 1 E-SIM - MWM22J/A",
//   "color":"blue",
//   "count":1,
//   "aboutItem":"6.7-inch Super Retina XDR display features Always On and ProMotion Dynamic Island, a magical new way to interact with iPhone48MP main camera with up to 4 times greater resolution Cinematic mode now in Dolby Vision in 4K resolution at up to 30fpsMotion mode for smooth, steady, handheld videosVital Safety Features - Satellite emergency function and collision detectionAll-day battery life and up to 29 hours of video playbackA16 Bionic chip, the ultimate smartphone chip. Ultra-fast cellular network, 5G networkIndustry leading durability features with ceramic shield and water resistance"



// },
// {
//   "id":9,
//   "name":"iphone 14 pro",
//   "image":"../../assets/iphone 14 pro.webp",
//   "price":23,
//   "date":"2023-2-4",
//   "description":"Apple iPhone 14 with FaceTime App - 128 GB, 4 GB RAM, 4G LTE, 1 SIM and 1 E-SIM - MWM22J/A",
//   "color":"blue",
//   "count":0,
//   "aboutItem":"6.7-inch Super Retina XDR display features Always On and ProMotion Dynamic Island, a magical new way to interact with iPhone48MP main camera with up to 4 times greater resolution Cinematic mode now in Dolby Vision in 4K resolution at up to 30fpsMotion mode for smooth, steady, handheld videosVital Safety Features - Satellite emergency function and collision detectionAll-day battery life and up to 29 hours of video playbackA16 Bionic chip, the ultimate smartphone chip. Ultra-fast cellular network, 5G networkIndustry leading durability features with ceramic shield and water resistance"



// },
// ]

  products : Product [] = data
  selectedProduct !: any 
  constructor(private activatedRoute:ActivatedRoute){}

 ngOnInit(){
  console.log(this.activatedRoute.snapshot.params['id']);
  this.selectedProduct =this.products.find(product=>product.id == this.activatedRoute.snapshot.params['id']);
  
 }


}
