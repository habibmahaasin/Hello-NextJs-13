import Image from 'next/image'

function ProjectPage(){
    return(
        <div>
            {[1,2] .map((path) => {
                return(
                    <div className='image-section' key={path}>
                       <Image src={`/projects/${path}.webp`} height='500' width='750' />
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectPage