import RootLayout from '@/components/layout';
import axios from 'axios';
import Link from 'next/link';

// !! Pass the data to the page via props
export async function getServerSideProps() {
    const res = await axios.get('http://localhost:3000/api/hello');
    const data = await res.data;
    return { props: { data } };
}

function index({ data }: any) {
    console.log('data', data);
    return (
        <RootLayout>
            <>Xin chao {data.name}</>
        </RootLayout>
    );
}

export default index;
