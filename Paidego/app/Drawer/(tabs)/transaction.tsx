import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// --- Reusable Sub-Components ---

// Transaction List Item Component
const TransactionListItem = ({ item }: { item: any }) => {
  const isCredit = item.type === 'Winning' || item.type === 'Refund';
  const amountColor = isCredit ? 'text-green-600' : 'text-red-600';
  const iconBgColor =
    item.type === 'Winning'
      ? 'bg-green-100'
      : item.type === 'Refund'
      ? 'bg-blue-100'
      : 'bg-red-100';
  const iconName =
    item.type === 'Winning'
      ? 'trophy'
      : item.type === 'Refund'
      ? 'refresh-circle'
      : 'arrow-up-circle';
  const iconColor =
    item.type === 'Winning'
      ? '#03AA00'
      : item.type === 'Refund'
      ? '#54A7F5'
      : '#DA0000';

  return (
    <View style={tw`flex-row items-center py-4`}>
      <View
        style={tw`w-12 h-12 rounded-full justify-center items-center mr-4 ${iconBgColor}`}>
        <Ionicons name={iconName} size={24} color={iconColor} />
      </View>
      <View style={tw`flex-1`}>
        <Text style={tw`text-base font-RoboMedium text-[#1D0303]`}>
          {item.title}
        </Text>
        <Text style={tw`text-sm font-RoboNormal text-gray-500 mt-1`}>
          {item.date}
        </Text>
      </View>
      <Text style={tw`text-sm font-RoboBold ${amountColor}`}>
        {isCredit ? '+' : '-'}${item.amount}
      </Text>
    </View>
  );
};



// --- Main Screen ---
const TransactionScreen: React.FC = () => {
  const transactions = [
    { type: 'Winning', title: 'Winning: Gulshan Padel', date: 'Aug 20, 2025', amount: '$250.00' },
    { type: 'Refund', title: 'Refund: Uttara Badminton', date: 'Aug 18, 2025', amount: '$5.00' },
    { type: 'Entry', title: 'Entry: Mirpur Cricket', date: 'Aug 15, 2025', amount: '$15.00' },
    { type: 'Winning', title: 'Winning: Gulshan Padel', date: 'Aug 12, 2025', amount: '$250.00' },
    { type: 'Entry', title: 'Entry: Mirpur Cricket', date: 'Aug 10, 2025', amount: '$15.00' },
    { type: 'Refund', title: 'Refund: Uttara Badminton', date: 'Aug 08, 2025', amount: '$5.00' },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-white pt-4`}>
      <StatusBar barStyle="dark-content" />
      <View style={tw`p-4 items-center`}>
        <Text style={tw`text-3xl font-RoboBold text-[#1D0303]`}>Transaction</Text>
      </View>
      
      <ScrollView contentContainerStyle={tw`pb-4 px-5`}>
        {/* Balance Card */}
        <View style={tw`bg-gray-100 rounded-2xl p-6 items-center my-4`}>
          <Text style={tw`text-base font-RoboNormal text-gray-700`}>Available Balance</Text>
          <Text style={tw`text-5xl font-RoboBold text-[#1D0303] my-2`}>$125.50</Text>
          <View style={tw`flex-row mt-4`}>
            <TouchableOpacity style={tw`border border-[#1D0303] rounded-lg py-3 px-10 mr-4`}>
              <Text style={tw`text-sm font-RoboMedium text-[#1D0303]`}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-[#1D0303] rounded-lg py-3 px-10`}>
              <Text style={tw`text-sm font-RoboMedium text-white`}>Add Funds</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Transaction History */}
        <View>
          <Text style={tw`text-2xl font-RoboBold text-[#1D0303] mb-2`}>Transactions</Text>
          {transactions.map((item, index) => (
            <TransactionListItem key={index} item={item} />
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionScreen;
