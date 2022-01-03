import RootContainer from '@/components/common/RootContainer';

export default function HomePage() {
  return (
    <RootContainer>
      <h3>
        Find code snippets, notes, tips and tricks for programming languages, libraries and
        frameworks.
      </h3>
      <section className='flex flex-col items-start'>
        <a href='/python' className='mt-10 flex items-center space-x-4'>
          <img src='/images/python.svg' width='48' height='auto' alt='Python' />
          <div>
            <h5 className='banner-body'> Python Notes</h5>
          </div>
        </a>

        <a href='/javascript' className='mt-10 flex items-center space-x-4'>
          <img src='images/javascript.svg' width='48' height='auto' alt='JavaScript' />
          <div>
            <h5 className='banner-body'> JavaScript Notes</h5>
          </div>
        </a>
      </section>
    </RootContainer>
  );
}
