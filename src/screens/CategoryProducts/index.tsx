import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { CategoryIcon } from '../../components/CategoryIcona';
import { GoBackHeader } from '../../components/GoBackHeader';
import { Loader } from '../../components/Loader';
import { ProductIcon } from '../../components/ProductIcon';
import { RootHomeNavigationProps, RootHomeRouteProps } from '../../routes/Home.routes';
import { api } from '../../services/api';
import { IProduct, TCategory } from '../../services/apiProps';

import {
  Categories,
  Container,
  Content,
  Header,
  Logo,
  Products
} from './styles';

export function CategoryProducts() {
  const [products, setProducts] = useState([] as IProduct[])
  const [Loading, setLoading] = useState(true)

  const route = useRoute<RootHomeRouteProps<'CategoryProducts'>>()
  const navigation = useNavigation<RootHomeNavigationProps<'CategoryProducts'>>()

  const { category } = route.params

  function handleProductIcon(product: IProduct) {
    navigation.navigate('ProductDetails', product)
  }

  useEffect(() => {
    let isMounted = true
    const ac = new AbortController()

    async function getData() {
      try {
        const products = await api.get(`products/category/${category}`)

        if (isMounted) {
          setProducts(products.data)
        }
      } catch (error) {
        console.log(error)
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    getData()

    return () => {
      isMounted = false
      ac.abort()
    }
  }, [])

  return (
    <Container>
      <GoBackHeader
        navigation={navigation}
        title={category.toUpperCase()}
      />
      {Loading
        ? <Loader />
        : (
          <Products
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            keyExtractor={item => String(item.id)}
            data={products}
            renderItem={({ item }) => (
              <ProductIcon
                data={item}
                onPress={() => handleProductIcon(item)}
              />
            )}
          />
        )
      }
    </Container>
  );
}
