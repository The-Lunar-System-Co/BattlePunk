import { MerkleTree } from "merkletreejs";
import { keccak256 } from "web3-utils";

import { premiumWhitelist, basicWhitelist } from "./whitelist";

const leavesPremium = premiumWhitelist.map(account => keccak256(account));
const treePremium = new MerkleTree(leavesPremium, keccak256, { sort: true });

const leavesBasic = basicWhitelist.map(account => keccak256(account));
const treeBasic = new MerkleTree(leavesBasic, keccak256, { sort: true });

export const getMerklePremiumRoot = () => {
  return treePremium.getHexRoot();
};

export const getMerkleBasicRoot = () => {
  return treeBasic.getHexRoot();
};

export const getMerklePremiumProof = account => {
  return treePremium.getHexProof(keccak256(account));
};

export const getMerkleBasicProof = account => {
  return treeBasic.getHexProof(keccak256(account));
};
