import clsx from 'clsx';

export default function Index() {
  return (
    <div className={clsx('container h-64 mx-auto my-12 p-4 max-w-screen-lg bg-green-100')}>
      Hello world
      <button
        bg='blue-600 hover:blue-500 dark:blue-500 dark:hover:blue-600'
        text='sm white'
        font='mono light'
        p='y-2 x-4'
        border='2 rounded blue-200'
      >
        Button
      </button>
    </div>
  );
}
