import Head from 'next/head';
import { useMemo } from 'react';
import { Inter } from '@next/font/google';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import Table, { Column, HouseholdData } from '@/components/Table/Table';

import styles from './index.module.css';

const inter = Inter({ subsets: ['latin'] });

const data: HouseholdData[] = [
  {
    id: 'id1',
    isCovered: true,
    name: {
      first: 'First',
      last: 'Last',
      preferred: 'Preferred',
    },
    identifier: '',
    insurance: 'primary',
    isSubscribed: true,
  },
  {
    id: 'id2',
    isCovered: true,
    name: {
      first: 'First',
      last: 'Last',
      preferred: 'Preferred',
    },
    identifier: '',
    insurance: 'primary',
    isSubscribed: true,
  },
];

export default function Home() {
  const columns: Column[] = useMemo(
    () => [
      {
        Header() {
          return (
            <>
              <span>Covered</span>
              <InformationCircleIcon className={styles.headerIcon} />
            </>
          );
        },
        Cell() {
          return <div>Col 1</div>;
        },
      },
      {
        Header() {
          return 'Name';
        },
        Cell() {
          return <div>Col 2</div>;
        },
      },
      {
        Header() {
          return 'Subscriber';
        },
        Cell() {
          return <div>Col 2</div>;
        },
      },
      {
        Header() {
          return 'Insurance';
        },
        Cell() {
          return <div>Col 2</div>;
        },
      },
      {
        Header() {
          return 'ID';
        },
        Cell() {
          return <div>Col 2</div>;
        },
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Table data={data} columns={columns} />
      </main>
    </>
  );
}
