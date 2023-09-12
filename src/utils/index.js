import { RPC_URL } from "src/constants";
import { Contract } from "@ethersproject/contracts";
import Web3 from "web3";
import moment from "moment";
export function sortAddress(add) {
  const sortAdd = `${add.slice(0, 6)}...${add.slice(add.length - 4)}`;
  return sortAdd;
}

export function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library;
}

export function getContract(address, ABI, library, account) {
  return new Contract(address, ABI, getProviderOrSigner(library, account));
}
export const getWeb3Obj = async () => {
  const httpProvider = new Web3.providers.HttpProvider(RPC_URL);
  const web3 = await new Web3(httpProvider);
  return web3;
};
export function counterTimer(endTime) {
  const now = moment();
  const targetDate = moment.unix(endTime);
  const diff = targetDate.diff(now);
  const duration = moment.duration(diff);
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();
  return { days, hours, minutes, seconds, diff };
}
