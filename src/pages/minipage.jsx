import Heading from '../components/Main_component/glavnya/heading'
import Products from '../components/Main_component/section-products/products'
import Benefits from '../components/Main_component/section-benefits/benefits'
import Otz from '../components/Main_component/otzyv/otz'
import Popular from '../components/Main_component/Section-popular/popular'
import H_f from '@/components/h_f/h_f'

export default function MainPage() {
    return (
        <>
        <H_f>
            <Heading />
            <Products />
            <Benefits />
            <Otz />
            <Popular />
        </H_f>
        </>
    );
}
