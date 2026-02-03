import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface DrawerItem {
  id: string;
  title: string;
  icon: string;
}

const DRAWER_DATA: DrawerItem[] = [
  { id: '1', title: 'Profile', icon: '👤' },
  { id: '2', title: 'Settings', icon: '⚙️' },
  { id: '3', title: 'Help & Support', icon: '❓' },
  { id: '4', title: 'About', icon: 'ℹ️' },
  { id: '5', title: 'Logout', icon: '🚪' },
];

export function DrawerContent({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) {
  const colorScheme = useColorScheme();

  const renderItem = ({ item }: { item: DrawerItem }) => (
    <TouchableOpacity
      onPress={() => {
        alert(`Navigating to ${item.title}`);
        navigation.closeDrawer();
      }}
      style={styles.drawerItem}
    >
      <Text style={styles.icon}>{item.icon}</Text>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          {
            backgroundColor: Colors[colorScheme ?? 'light'].tint,
          },
        ]}
      >
        <Text style={styles.headerText}>Menu</Text>
      </View>
      <FlatList
        data={DRAWER_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>v1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  icon: {
    fontSize: 24,
    marginRight: 16,
  },
  itemText: {
    fontSize: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 'auto',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
  },
});
