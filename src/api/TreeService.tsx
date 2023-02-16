import axios, { AxiosResponse } from "axios";
import { INode } from "../models/INode";
import getQueryString from "../utils";

export default class TreeService {
  static async getTree(treeName: string): Promise<AxiosResponse<INode>> {
    return axios.post<INode>(
      `${process.env.REACT_APP_API_URL}api.user.tree.get?treeName=${treeName}`
    );
  }

  static async createNode(
    treeName: string,
    parentNodeId: number,
    nodeName: string
  ): Promise<AxiosResponse<INode>> {
    return axios.post<INode>(
      `${process.env.REACT_APP_API_URL}api.user.tree.node.create?treeName=${treeName}&parentNodeId=${parentNodeId}&nodeName=${nodeName}`
    );
  }

  static async deleteNode(
    treeName: string,
    nodeId: number
  ): Promise<AxiosResponse<INode>> {
    return axios.post<INode>(
      `${process.env.REACT_APP_API_URL}api.user.tree.node.delete?treeName=${treeName}&nodeId=${nodeId}`
    );
  }

  static async renameNode(
    treeName: string,
    nodeId: number,
    newNodeName: string
  ): Promise<AxiosResponse<INode>> {
    return axios.post<INode>(
      `${process.env.REACT_APP_API_URL}api.user.tree.node.rename?treeName=${treeName}&nodeId=${nodeId}&newNodeName=${newNodeName}`
    );
  }
}
