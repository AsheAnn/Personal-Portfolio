import { useMounted } from '@/hooks/useMounted'
import { clsx as cx } from 'clsx'


const Home = () => {
  const { isDiffPath } = useMounted()

  return (
    <section className="relative w-full h-full">
      <div className="absolute bottom-0 w-full">
        <div
          className={cx(
            isDiffPath ? '' : 'opacity-0',
            'duration-[1200ms] delay-75 ease-in-out text-xl tracking-wider'
          )}
        >
        
          <div className="inline-flex justify-between w-1/3">
            <p className="font-NotoSans font-light">Sense and Sensibility</p>
            <p> © 2023</p>
          </div>
          <div
            className={cx(
              'mt-4 transition-all duration-1000 ease-in-out delay-75 dark:bg-gray-50 h-[1px] bg-theme-100',
              isDiffPath ? 'w-1/3 ' : 'w-0'
            )}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Home
