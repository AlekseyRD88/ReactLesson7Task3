import React from 'react';
import moment from 'moment';


export const formatDate = date => moment(date).format("DD MMM");
export const formatTime = date => moment(date).format("hh:mm");
export const formatNumber = new Intl.NumberFormat('en-GB');

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate(time)}</span>
      <span className="transaction__time">{formatTime(time)}</span>
      <span class="transaction__assets">{from} → {to}</span>
      <span class="transaction__rate">{rate}</span>
      <span class="transaction__amount">{amount}</span>
    </li>
  );
};

export default Transaction;