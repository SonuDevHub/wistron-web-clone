import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 ,d:w-2/4 text-gray-600'>
          <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, blanditiis? Officia vero minima sint quisquam hic consectetur repellendus aut veniam. Eum, reiciendis aliquid sed quas, eius nostrum unde necessitatibus deserunt incidunt accusamus quis. Laboriosam totam commodi, obcaecati sequi aliquid earum repellat rem sint provident eos eligendi. Voluptatibus ea natus error!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo autem, accusamus inventore optio, eveniet ut hic, culpa blanditiis provident soluta ipsa sunt rerum. Reiciendis voluptatum cumque accusantium pariatur nisi, dignissimos deserunt rerum dolorem assumenda distinctio at laudantium nihil id alias necessitatibus ipsum laboriosam debitis sequi iste iure voluptatibus quam.</p>
          <b className='trext-gray-800'>Our Mission</b>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa nemo voluptatibus beatae totam harum, vero, commodi magnam alias pariatur ipsa cumque distinctio blanditiis laborum ut ad maiores reprehenderit iure eius doloribus. Sed esse debitis expedita laudantium natus ut recusandae numquam voluptatem accusamus maxime saepe, explicabo mollitia non facilis sunt?</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={"CHOOSE US"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, doloremque totam aspernatur natus ea unde sint sit quisquam ducimus sunt, possimus voluptates quidem suscipit aliquid architecto, earum fugiat enim quis?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, doloremque totam aspernatur natus ea unde sint sit quisquam ducimus sunt, possimus voluptates quidem suscipit aliquid architecto, earum fugiat enim quis?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, doloremque totam aspernatur natus ea unde sint sit quisquam ducimus sunt, possimus voluptates quidem suscipit aliquid architecto, earum fugiat enim quis?</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About