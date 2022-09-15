import Link from "next/link";
import React from "react";

export default function index({ data }) {
  return (
    <>
      <section className="bg-white w-full h-full dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Liste des utilisateurs
            </h2>
            
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {
              data.map((user) => (
                <article key={user.id} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{user.name}</a>
              </h2>
              <div className="flex justify-between items-center">
                 <Link href={`/listes/${user.id}`}>
                  <a  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      voir plus de details 
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                 </Link>
              </div>
              
            </article>
              ))
            }
            
            
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const blocs = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await blocs.json();
  return {
    props: { data },
  };
}
