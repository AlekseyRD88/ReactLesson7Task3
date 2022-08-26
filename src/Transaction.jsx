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
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{formatNumber.format(rate)}</span>
      <span className="transaction__amount">{formatNumber.format(amount)}</span>
    </li>
  );
};

export default Transaction;