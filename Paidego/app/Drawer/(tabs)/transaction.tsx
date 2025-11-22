import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
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
        {isCredit ? '+' : '-'}{item.amount}
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

  const [filter, setFilter] = useState('This Week');
  const [openFilter, setOpenFilter] = useState(false);
  const filterOptions = ['This Week', 'This Month', 'This Year'];

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
            <TouchableOpacity style={tw`border border-[#1D0303] rounded-lg py-3 px-6 mr-4`}>
              <Text style={tw`text-sm font-RoboMedium text-[#1D0303]`}>Withdraw Earning</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/modals/Payment_Modal")} style={tw`bg-[#1D0303] rounded-lg py-3 px-8`}>
              <Text style={tw`text-sm font-RoboMedium text-white`}>Deposit Funds</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Transaction History */}
        <View>
          <View style={tw`flex flex-row justify-between items-center mb-4`}>
            <Text style={tw`text-2xl font-RoboBold text-[#1D0303] mb-2`}>Transactions</Text>

            {/* weekly dropdown filter option */}
            <View style={tw`mb-4`}>
              <TouchableOpacity
                onPress={() => setOpenFilter(!openFilter)}
                style={tw`flex-row justify-between items-center p-3 bg-white rounded-lg border border-gray-200`}>
                <Text style={tw`text-sm font-RoboMedium text-gray-700`}>{filter}</Text>
                <Ionicons name={openFilter ? 'chevron-up' : 'chevron-down'} size={18} color="#1D0303" />
              </TouchableOpacity>
              {openFilter && (
                <View style={tw`bg-white rounded-lg mt-2 border absolute z-10 top-10  border-gray-200`}>
                  {filterOptions.map((opt) => (
                    <TouchableOpacity
                      key={opt}
                      onPress={() => {
                        setFilter(opt);
                        setOpenFilter(false);
                      }}
                      style={tw`px-4 py-3 border-b border-gray-100`}>
                      <Text style={tw`text-sm font-RoboNormal text-gray-700`}>{opt}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>
          {transactions.map((item, index) => (
            <TransactionListItem key={index} item={item} />
          ))}

          <View>
            <TouchableOpacity style={tw`mt-4 items-center`}>
              <Text style={tw`text-sm font-RoboMedium text-[#1D0303]`}>Load More</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionScreen;
