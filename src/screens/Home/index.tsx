import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import { CategoryIcon } from '../../components/CategoryIcona';
import { CategoryList } from '../../components/CategoryList';
import { Loader } from '../../components/Loader';
import { ProductIcon } from '../../components/ProductIcon';
import { ProductList } from '../../components/ProductList';
import { RootHomeNavigationProps } from '../../routes/Home.routes';
import { api } from '../../services/api';
import { IProduct, TCategory } from '../../services/apiProps';

import {
  Categories,
  Container,
  Content,
  Header,
  Logo,
} from './styles';

export function Home() {
  const [categories, setCategories] = useState([] as TCategory[])
  const [products, setProducts] = useState([] as IProduct[])
  const [Loading, setLoading] = useState(true)

  const theme = useTheme()

  const navigation = useNavigation<RootHomeNavigationProps<'Home'>>()

  function handleCategoryIcon(category: TCategory) {
    navigation.navigate('CategoryProducts', { category })
  }

  function handleProductIcon(product: IProduct) {
    navigation.navigate('ProductDetails', product)
  }
  

  useEffect(() => {
    let isMounted = true
    const ac = new AbortController()

    async function getData() {
      try {
        const [categories, products] = await Promise.all([
          api.get('products/categories'),
          api.get('products'),
        ])

        if (isMounted) {
          setCategories(categories.data)
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
      <Header>
        <Logo>Fake Storage App</Logo>
      </Header>

      {Loading
        ? <Loader />
        : (
          <Content>
            <CategoryList
              data={categories}
              title="Categories"
              onPress={handleCategoryIcon}
            />

            <ProductList
              data={products}
              title="Products"
              onPress={handleProductIcon}
            />
          </Content>
        )
      }
    </Container>
  );
}
