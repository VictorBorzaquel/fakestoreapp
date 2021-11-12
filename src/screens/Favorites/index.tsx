import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { CategoryIcon } from '../../components/CategoryIcona';
import { GoBackHeader } from '../../components/GoBackHeader';
import { Loader } from '../../components/Loader';
import { ProductIcon } from '../../components/ProductIcon';
import { useAuth } from '../../hooks/auth';
import { RootFavoritesNavigationProps } from '../../routes/Favorites.routes';
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

export function Favorites() {
  const [products, setProducts] = useState([] as IProduct[])
  const [Loading, setLoading] = useState(true)
  const { user, favorites, toggleFavorite } = useAuth()
  const isFocused = useIsFocused()

  const navigation = useNavigation<RootFavoritesNavigationProps<'Favorites'>>()

  function handleProductIcon(product: IProduct) {
    navigation.navigate('ProductDetails', product)
  }

  useEffect(() => {
    setLoading(true)
    let isMounted = true
    const ac = new AbortController()

    async function getData() {
      try {
        const response = await api.get<IProduct[]>(`products`)

        const products = response.data.filter(product => favorites.includes(product.id))

        if (isMounted) {
          setProducts(products)
        }
      } catch (error) {
        console.log(error)
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    if (isFocused) {
      getData()
    }

    return () => {
      isMounted = false
      ac.abort()
    }
  }, [isFocused])

  return (
    <Container>
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
