import Image from 'next/image'
import {useState, useEffect} from 'react'

function HomePage() {
  const [isLoading,setIsLoading] = useState(true)
  const [skillsAndTools,setSkillsAndTools] = useState(null)
  const [experience,setExperience] = useState(null)

  useEffect (() => {
    async function fetchSkillsandToolsList() {
        const response = await fetch('/api/skills-tools')
        const data = await response.json()
        setSkillsAndTools(data)
        setIsLoading(false)
    }
    fetchSkillsandToolsList()
  },[])

  useEffect (() => {
    async function fetchExperience() {
        const response = await fetch('/api/experience')
        const data = await response.json()
        setExperience(data)
        setIsLoading(false)
        console.log(data)
    }
    fetchExperience()
  },[])

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center align-content-center loading-bar'>
        <div class="spinner-grow" role="status">
        </div>
      </div>
    )
  }

  return (
    <div>
      <h4 className='page-title mt-2'><span>About</span> Me</h4>
      <div className="d-flex justify-content-between">
        <div className="card mt-4">
          <div className="card-body">
            <div className="row align-middle">
              <div className='col-6 profile-section w-25'>
                <div className='image-container'>
                  <Image src={`/profile.svg`} layout="fill" className='image' />
                </div>
              </div>
              <div className='col-6 heading-profile w-75 mt-auto mb-auto'>
                <h4 className='mt-3'>Habib Irfan Mahaasin</h4>
                <p className='mini-title'>Junior <span>Web Development</span></p>
              </div>
            </div>
            <p className='intro mt-4' align='justify'> Hi! , I'm <span>Habib Irfan Mahaasin</span> Junior Website Developer from Telkom University. I'm interested in learning about website development, especially the front-end web development with various frameworks, but I'm also still learning some parts of the back-end web development even though it's not too intensive</p>
          </div>
        </div>
      </div>
      <h4 className='page-title mt-4'>Skills & <span>Tools</span></h4>
      <div class="horizontal-slider-container mt-3 mb-5">
        <ul class="horizonal-slider">
          {skillsAndTools.map((skill_tools) => {
            return(
              <li key={skill_tools.id}>
                <div className='image-container-index'>
                    <Image src={`/skills-tools/${skill_tools.id}.svg`} layout="fill" className='image' />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <h4 className='page-title mt-4'><span>Work</span> Experience</h4>
      <div className="card mt-4 rounded-3">
          <div className="card-body">
            <div className="row align-middle">
              <div className='col-6 profile-section w-25'>
                <div className='image-container'>
                  <Image src={`/profile.svg`} layout="fill" className='image' />
                </div>
              </div>
              <div className='col-6 heading-profile w-75 mt-auto mb-auto'>
                <h4 className='mt-3'>Habib Irfan Mahaasin</h4>
                <p className='mini-title'>Junior <span>Web Development</span></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default HomePage;
