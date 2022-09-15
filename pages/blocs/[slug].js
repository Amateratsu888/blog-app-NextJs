import React from 'react'

export default function bloc({bloc}) {
console.log("🚀 ~ file: [slug].js ~ line 4 ~ bloc ~ bloc", bloc)

    if(!bloc){
        return <>
              <section className="bg-white w-full h-full dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Laoding...</h2>
      </div> 
      
  </div>
</section>
        </>
    }

  return (
    <>
        <div className='mt-40 w-1/2 ml-80 '>

        <article key={bloc.id} className=" p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{bloc.title}</a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                {bloc.body}
              </p>
              
              
            </article>
        </div>
    </>
  )
}

export async function getStaticPaths() {  
    return {
      paths:[{params: { slug: '1' }},{params: { slug: '2' }}],
      fallback: true,
    };
  }
  

export async function getStaticProps (context) {
    const slug = context.params.slug; 
    let blocs = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (blocs.ok) { 
        blocs = await blocs.json();
    }
    let bloc = []
    bloc = blocs.find((el) => el.id === +slug);
    if (bloc.length > 0) {
        return {notFound: true}
    }
  return {
    props: { bloc },
  };
}