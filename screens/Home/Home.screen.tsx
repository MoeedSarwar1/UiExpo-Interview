import { DummyItem, getPaginatedDummyData } from '@/components/data/dummy';
import Header from '@/components/ui/Header/header';
import { homeStyles } from '@/screens/Home/Home.styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useCallback, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ITEMS_PER_PAGE = 10;

const HomeScreen = () => {
  const styles = homeStyles;
  const [currentPage, setCurrentPage] = useState(1);
  const [allItems, setAllItems] = useState<DummyItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useMemo(() => {
    const response = getPaginatedDummyData(1, ITEMS_PER_PAGE);
    setAllItems(response.data);
    setHasMore(response.hasNextPage);
    setCurrentPage(1);
    setIsInitialLoading(false);
  }, []);

  const onNotificationPress = () => {
    Alert.alert('Notifications pressed');
  };

  const handleLoadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const response = getPaginatedDummyData(nextPage, ITEMS_PER_PAGE);

      setAllItems((prev) => [...prev, ...response.data]);
      setCurrentPage(nextPage);
      setHasMore(response.hasNextPage);
      setIsLoading(false);
    }, 300);
  }, [currentPage, isLoading, hasMore]);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      const response = getPaginatedDummyData(1, ITEMS_PER_PAGE);
      setAllItems(response.data);
      setCurrentPage(1);
      setHasMore(response.hasNextPage);
      setIsRefreshing(false);
    }, 500);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: DummyItem }) => (
      <View style={styles.itemContainer}>
        <View style={styles.itemContent}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription} numberOfLines={2}>
            {item.description}
          </Text>
          <View style={styles.itemFooter}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>⭐ {item.rating}</Text>
            </View>
          </View>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </View>
    ),
    []
  );

  const renderFooter = useCallback(() => {
    if (!isLoading) return null;
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0a7ea4" />
        <Text style={styles.loadingText}>Loading more items...</Text>
      </View>
    );
  }, [isLoading]);

  const renderEmpty = useCallback(() => {
    if (isInitialLoading) {
      return (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" color="#0a7ea4" />
          <Text>Loading items...</Text>
        </View>
      );
    }

    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyEmoji}>📭</Text>
        <Text style={styles.emptyTitle}>No items found</Text>
        <Text style={styles.emptySubtitle}>
          Pull down to refresh and try again
        </Text>
      </View>
    );
  }, [isInitialLoading]);

  if (isInitialLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title="Home"
          rightIcon={<Ionicons name="notifications" size={24} color="white" />}
          rightIconOnPress={onNotificationPress}
        />
        <View style={styles.initialLoadingContainer}>
          <ActivityIndicator size="large" color="#0a7ea4" />
          <Text style={styles.initialLoadingText}>Loading items...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Home"
        rightIcon={<Ionicons name="notifications" size={24} color="white" />}
        rightIconOnPress={onNotificationPress}
      />
      <FlatList
        data={allItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        scrollEnabled={true}
        style={styles.flatList}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#0a7ea4']}
            tintColor="#0a7ea4"
          />
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
