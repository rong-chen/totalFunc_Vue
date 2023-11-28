<template>
    <div style="display: flex">
        <!-- <el-space wrap>
            <el-card
                v-for="item in tableData"
                :key="item.ID"
                class="box-card"
                style="width: 280px"
            >
                <template #header>
                    <div class="card-header">
                        <div style="font-weight: 500; color: rgb(134, 150, 167)">
                            {{ item.ID.slice(0, 8) }}...
                        </div>
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">
                    {{ "List item " + o }}
                </div>
            </el-card>
        </el-space> -->
        <div style="width: 250px; border-right: 1px solid #eeeeee">
            <meau></meau>
        </div>
        <el-descriptions
            class="margin-top"
            title="ed15dcdf-847e-4773-b698-86959521deb0"
            :column="3"
            :size="size"
            border
            style="flex: 1; padding: 10px"
        >
            <template #extra>
                <el-button type="primary">设置</el-button>
                <el-button>删除</el-button>
                <el-button>取消</el-button>
            </template>
            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">数据源：</div>
                </template>
                kooriookami
            </el-descriptions-item>
            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">数据量：</div>
                </template>
                20GB
            </el-descriptions-item>
            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">作业状态:</div>
                </template>
                失败
            </el-descriptions-item>
            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">数据类型:</div>
                </template>
                数据库</el-descriptions-item
            ><el-descriptions-item>
                <template #label>
                    <div class="cell-item">开始时间:</div>
                </template>
                2023-11-03 16:22:02</el-descriptions-item
            ><el-descriptions-item>
                <template #label>
                    <div class="cell-item">结束时间:</div>
                </template>
                2023-11-03 16:23:02 </el-descriptions-item
            ><el-descriptions-item>
                <template #label>
                    <div class="cell-item">策略名称:</div>
                </template>

                test-oracle </el-descriptions-item
            ><el-descriptions-item>
                <template #label>
                    <div class="cell-item">进度</div>
                </template>
                100% </el-descriptions-item
            ><el-descriptions-item>
                <template #label>
                    <div class="cell-item">进度</div>
                </template>
                100% </el-descriptions-item
            ><el-descriptions-item>
                <template #label>
                    <div class="cell-item">进度</div>
                </template>
                100%
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>
<script setup>
import { ref } from "vue";
import meau from "../../meau/index.vue";
let tableData = ref([
    {
        CreatedAt: "2023-11-03T14:28:06.723311+08:00",
        UpdatedAt: "2023-11-03T14:31:52.836332+08:00",
        ID: "ed15dcdf-847e-4773-b698-86959521deb0",
        dataType: "db",
        workType: "backup",
        backWorkType: "full",
        dataSize: 167026688,
        progress: 10,
        startAt: "2023-11-03T14:28:12.019453+08:00",
        EndAt: "2023-11-03T14:29:26.781886+08:00",
        status: "failed",
        clientId: "f51c9936-f563-4eb8-818b-bdb5351e34ba",
        client: {
            CreatedAt: "2023-10-10T16:19:55.659894+08:00",
            UpdatedAt: "2023-11-03T14:29:02.012125+08:00",
            ID: "f51c9936-f563-4eb8-818b-bdb5351e34ba",
            name: "centos7-12-35"
        },
        storageId: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
        storage: {
            CreatedAt: "2023-06-12T10:03:49.007988+08:00",
            UpdatedAt: "2023-06-24T09:52:33.017291+08:00",
            ID: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
            ip: {
                default: "192.168.12.55"
            },
            name: "centos7-12-55",
            protocol: [
                {
                    Category: "iscsi",
                    Identifier: ["iqn.2023-03.com.centos7-12-55:tgt1"]
                }
            ],
            os: "centos",
            osVersion: "7.9.2009",
            version: "2.0.0",
            replicationIp: "",
            status: "offline",
            extendInfo: null,
            domainId: "1",
            storagePools: null,
            arch: "amd64",
            hostName: "centos7-12-55",
            checkTime: "2023-06-24T09:50:19.727472+08:00"
        },
        dataSourceId: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
        dataSource: {
            CreatedAt: "2023-10-10T16:19:55.701896+08:00",
            UpdatedAt: "2023-11-03T14:28:55.984114+08:00",
            ID: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
            name: "db2inst2"
        },
        dataSourceType: "db2",
        total: "",
        finished: "",
        percentage: "",
        pid: "",
        vCenterId: 0,
        vmDataCenterId: 0,
        vmHostId: 0,
        vmHost: {
            ID: 0,
            CreatedAt: "0001-01-01T00:00:00Z",
            UpdatedAt: "0001-01-01T00:00:00Z",
            name: "",
            version: "",
            host: "",
            initiator: null,
            desc: "",
            vCenterId: 0,
            vCenterIp: "",
            dataCenterId: 0,
            dataCenterName: "",
            virtualMachines: 0,
            dataStore: null
        },
        dataSourceCount: 2,
        complete: 0,
        hasChildren: false,
        parentId: "",
        childStatus: true,
        childDesc: "",
        taskType: "resourceRecover",
        currentTask: "clientUnmount",
        useTime: 74
    },
    {
        CreatedAt: "2023-11-03T14:24:54.548704+08:00",
        UpdatedAt: "2023-11-03T14:26:21.2291+08:00",
        ID: "280d2f2e-d2b2-4527-9712-4bf1300d4792",
        dataType: "db",
        workType: "restore",
        backWorkType: "",
        dataSize: 167026688,
        progress: 30,
        startAt: "2023-11-03T14:25:02.011515+08:00",
        EndAt: "2023-11-03T14:26:21.171803+08:00",
        status: "failed",
        clientId: "3e490c5e-53b3-4109-8588-beb6fc85440e",
        client: {
            CreatedAt: "2023-10-10T16:33:17.394257+08:00",
            UpdatedAt: "2023-10-30T10:45:37.012983+08:00",
            ID: "3e490c5e-53b3-4109-8588-beb6fc85440e",
            name: "localhost.localdomain"
        },
        storageId: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
        storage: {
            CreatedAt: "2023-06-12T10:03:49.007988+08:00",
            UpdatedAt: "2023-06-24T09:52:33.017291+08:00",
            ID: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
            ip: {
                default: "192.168.12.55"
            },
            name: "centos7-12-55",
            protocol: [
                {
                    Category: "iscsi",
                    Identifier: ["iqn.2023-03.com.centos7-12-55:tgt1"]
                }
            ],
            os: "centos",
            osVersion: "7.9.2009",
            version: "2.0.0",
            replicationIp: "",
            status: "offline",
            extendInfo: null,
            domainId: "1",
            storagePools: null,
            arch: "amd64",
            hostName: "centos7-12-55",
            checkTime: "2023-06-24T09:50:19.727472+08:00"
        },
        dataSourceId: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
        dataSource: {
            CreatedAt: "2023-10-10T16:19:55.701896+08:00",
            UpdatedAt: "2023-11-03T14:28:55.984114+08:00",
            ID: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
            name: "db2inst2"
        },
        dataSourceType: "db2",
        total: "",
        finished: "",
        percentage: "",
        pid: "",
        vCenterId: 0,
        vmDataCenterId: 0,
        vmHostId: 0,
        vmHost: {
            ID: 0,
            CreatedAt: "0001-01-01T00:00:00Z",
            UpdatedAt: "0001-01-01T00:00:00Z",
            name: "",
            version: "",
            host: "",
            initiator: null,
            desc: "",
            vCenterId: 0,
            vCenterIp: "",
            dataCenterId: 0,
            dataCenterName: "",
            virtualMachines: 0,
            dataStore: null
        },
        dataSourceCount: 2,
        complete: 0,
        hasChildren: false,
        parentId: "",
        childStatus: true,
        childDesc: "",
        taskType: "resourceRecover",
        currentTask: "clientUnmount",
        useTime: 79
    },
    {
        CreatedAt: "2023-11-03T13:52:24.595082+08:00",
        UpdatedAt: "2023-11-03T13:52:55.908231+08:00",
        ID: "6d8a620d-290d-4775-8c52-f649cf2fe51c",
        dataType: "db",
        workType: "restore",
        backWorkType: "",
        dataSize: 167026688,
        progress: 100,
        startAt: "2023-11-03T13:52:34.011613+08:00",
        EndAt: "2023-11-03T13:52:55.90399+08:00",
        status: "success",
        clientId: "891b69d5-f34d-46fb-a6c8-649924f49d07",
        client: {
            CreatedAt: "2023-06-06T14:54:50.841871+08:00",
            UpdatedAt: "2023-10-30T10:45:37.018827+08:00",
            ID: "891b69d5-f34d-46fb-a6c8-649924f49d07",
            name: "centos7-12-54"
        },
        storageId: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
        storage: {
            CreatedAt: "2023-06-12T10:03:49.007988+08:00",
            UpdatedAt: "2023-06-24T09:52:33.017291+08:00",
            ID: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
            ip: {
                default: "192.168.12.55"
            },
            name: "centos7-12-55",
            protocol: [
                {
                    Category: "iscsi",
                    Identifier: ["iqn.2023-03.com.centos7-12-55:tgt1"]
                }
            ],
            os: "centos",
            osVersion: "7.9.2009",
            version: "2.0.0",
            replicationIp: "",
            status: "offline",
            extendInfo: null,
            domainId: "1",
            storagePools: null,
            arch: "amd64",
            hostName: "centos7-12-55",
            checkTime: "2023-06-24T09:50:19.727472+08:00"
        },
        dataSourceId: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
        dataSource: {
            CreatedAt: "2023-10-10T16:19:55.701896+08:00",
            UpdatedAt: "2023-11-03T14:28:55.984114+08:00",
            ID: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
            name: "db2inst2"
        },
        dataSourceType: "db2",
        total: "",
        finished: "",
        percentage: "",
        pid: "",
        vCenterId: 0,
        vmDataCenterId: 0,
        vmHostId: 0,
        vmHost: {
            ID: 0,
            CreatedAt: "0001-01-01T00:00:00Z",
            UpdatedAt: "0001-01-01T00:00:00Z",
            name: "",
            version: "",
            host: "",
            initiator: null,
            desc: "",
            vCenterId: 0,
            vCenterIp: "",
            dataCenterId: 0,
            dataCenterName: "",
            virtualMachines: 0,
            dataStore: null
        },
        dataSourceCount: 2,
        complete: 0,
        hasChildren: false,
        parentId: "",
        childStatus: true,
        childDesc: "",
        taskType: "restore",
        currentTask: "storageDeleteMap",
        useTime: 21
    },
    {
        CreatedAt: "2023-11-03T13:49:34.020952+08:00",
        UpdatedAt: "2023-11-03T13:51:55.230711+08:00",
        ID: "8f0d4de3-0f63-4c33-91f4-e98e70ccce61",
        dataType: "db",
        workType: "restore",
        backWorkType: "",
        dataSize: 167026688,
        progress: 30,
        startAt: "2023-11-03T13:49:39.009743+08:00",
        EndAt: "2023-11-03T13:51:27.100972+08:00",
        status: "failed",
        clientId: "d42ba364-41d1-4ae5-81ec-b6812b6b839a",
        client: {
            CreatedAt: "2023-08-02T11:19:56.694079+08:00",
            UpdatedAt: "2023-09-19T11:19:28.013074+08:00",
            ID: "d42ba364-41d1-4ae5-81ec-b6812b6b839a",
            name: "sle12-sp5-12-61"
        },
        storageId: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
        storage: {
            CreatedAt: "2023-06-12T10:03:49.007988+08:00",
            UpdatedAt: "2023-06-24T09:52:33.017291+08:00",
            ID: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
            ip: {
                default: "192.168.12.55"
            },
            name: "centos7-12-55",
            protocol: [
                {
                    Category: "iscsi",
                    Identifier: ["iqn.2023-03.com.centos7-12-55:tgt1"]
                }
            ],
            os: "centos",
            osVersion: "7.9.2009",
            version: "2.0.0",
            replicationIp: "",
            status: "offline",
            extendInfo: null,
            domainId: "1",
            storagePools: null,
            arch: "amd64",
            hostName: "centos7-12-55",
            checkTime: "2023-06-24T09:50:19.727472+08:00"
        },
        dataSourceId: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
        dataSource: {
            CreatedAt: "2023-10-10T16:19:55.701896+08:00",
            UpdatedAt: "2023-11-03T14:28:55.984114+08:00",
            ID: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
            name: "db2inst2"
        },
        dataSourceType: "db2",
        total: "",
        finished: "",
        percentage: "",
        pid: "",
        vCenterId: 0,
        vmDataCenterId: 0,
        vmHostId: 0,
        vmHost: {
            ID: 0,
            CreatedAt: "0001-01-01T00:00:00Z",
            UpdatedAt: "0001-01-01T00:00:00Z",
            name: "",
            version: "",
            host: "",
            initiator: null,
            desc: "",
            vCenterId: 0,
            vCenterIp: "",
            dataCenterId: 0,
            dataCenterName: "",
            virtualMachines: 0,
            dataStore: null
        },
        dataSourceCount: 2,
        complete: 0,
        hasChildren: false,
        parentId: "",
        childStatus: true,
        childDesc: "",
        taskType: "resourceRecover",
        currentTask: "storageDeleteMap",
        useTime: 108
    },
    {
        CreatedAt: "2023-11-03T10:36:59.474635+08:00",
        UpdatedAt: "2023-11-03T10:40:05.033285+08:00",
        ID: "e1b91505-9379-47e4-ba6d-e7d951785537",
        dataType: "db",
        workType: "restore",
        backWorkType: "",
        dataSize: 167026688,
        progress: 100,
        startAt: "2023-11-03T10:37:09.013736+08:00",
        EndAt: "2023-11-03T10:40:05.02942+08:00",
        status: "success",
        clientId: "891b69d5-f34d-46fb-a6c8-649924f49d07",
        client: {
            CreatedAt: "2023-06-06T14:54:50.841871+08:00",
            UpdatedAt: "2023-10-30T10:45:37.018827+08:00",
            ID: "891b69d5-f34d-46fb-a6c8-649924f49d07",
            name: "centos7-12-54"
        },
        storageId: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
        storage: {
            CreatedAt: "2023-06-12T10:03:49.007988+08:00",
            UpdatedAt: "2023-06-24T09:52:33.017291+08:00",
            ID: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
            ip: {
                default: "192.168.12.55"
            },
            name: "centos7-12-55",
            protocol: [
                {
                    Category: "iscsi",
                    Identifier: ["iqn.2023-03.com.centos7-12-55:tgt1"]
                }
            ],
            os: "centos",
            osVersion: "7.9.2009",
            version: "2.0.0",
            replicationIp: "",
            status: "offline",
            extendInfo: null,
            domainId: "1",
            storagePools: null,
            arch: "amd64",
            hostName: "centos7-12-55",
            checkTime: "2023-06-24T09:50:19.727472+08:00"
        },
        dataSourceId: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
        dataSource: {
            CreatedAt: "2023-10-10T16:19:55.701896+08:00",
            UpdatedAt: "2023-11-03T14:28:55.984114+08:00",
            ID: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
            name: "db2inst2"
        },
        dataSourceType: "db2",
        total: "",
        finished: "",
        percentage: "",
        pid: "",
        vCenterId: 0,
        vmDataCenterId: 0,
        vmHostId: 0,
        vmHost: {
            ID: 0,
            CreatedAt: "0001-01-01T00:00:00Z",
            UpdatedAt: "0001-01-01T00:00:00Z",
            name: "",
            version: "",
            host: "",
            initiator: null,
            desc: "",
            vCenterId: 0,
            vCenterIp: "",
            dataCenterId: 0,
            dataCenterName: "",
            virtualMachines: 0,
            dataStore: null
        },
        dataSourceCount: 2,
        complete: 0,
        hasChildren: false,
        parentId: "",
        childStatus: true,
        childDesc: "",
        taskType: "restore",
        currentTask: "storageDeleteMap",
        useTime: 176
    },
    {
        CreatedAt: "2023-11-03T10:28:25.348987+08:00",
        UpdatedAt: "2023-11-03T10:37:23.33448+08:00",
        ID: "96a641dc-7dde-4e51-a54f-2a6d27fe8a25",
        dataType: "db",
        workType: "restore",
        backWorkType: "",
        dataSize: 167026688,
        progress: 10,
        startAt: "2023-11-03T10:29:46.526+08:00",
        EndAt: "2023-11-03T10:37:23.287874+08:00",
        status: "failed",
        clientId: "891b69d5-f34d-46fb-a6c8-649924f49d07",
        client: {
            CreatedAt: "2023-06-06T14:54:50.841871+08:00",
            UpdatedAt: "2023-10-30T10:45:37.018827+08:00",
            ID: "891b69d5-f34d-46fb-a6c8-649924f49d07",
            name: "centos7-12-54"
        },
        storageId: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
        storage: {
            CreatedAt: "2023-06-12T10:03:49.007988+08:00",
            UpdatedAt: "2023-06-24T09:52:33.017291+08:00",
            ID: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
            ip: {
                default: "192.168.12.55"
            },
            name: "centos7-12-55",
            protocol: [
                {
                    Category: "iscsi",
                    Identifier: ["iqn.2023-03.com.centos7-12-55:tgt1"]
                }
            ],
            os: "centos",
            osVersion: "7.9.2009",
            version: "2.0.0",
            replicationIp: "",
            status: "offline",
            extendInfo: null,
            domainId: "1",
            storagePools: null,
            arch: "amd64",
            hostName: "centos7-12-55",
            checkTime: "2023-06-24T09:50:19.727472+08:00"
        },
        dataSourceId: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
        dataSource: {
            CreatedAt: "2023-10-10T16:19:55.701896+08:00",
            UpdatedAt: "2023-11-03T14:28:55.984114+08:00",
            ID: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
            name: "db2inst2"
        },
        dataSourceType: "db2",
        total: "",
        finished: "",
        percentage: "",
        pid: "",
        vCenterId: 0,
        vmDataCenterId: 0,
        vmHostId: 0,
        vmHost: {
            ID: 0,
            CreatedAt: "0001-01-01T00:00:00Z",
            UpdatedAt: "0001-01-01T00:00:00Z",
            name: "",
            version: "",
            host: "",
            initiator: null,
            desc: "",
            vCenterId: 0,
            vCenterIp: "",
            dataCenterId: 0,
            dataCenterName: "",
            virtualMachines: 0,
            dataStore: null
        },
        dataSourceCount: 2,
        complete: 0,
        hasChildren: false,
        parentId: "",
        childStatus: true,
        childDesc: "",
        taskType: "resourceRecover",
        currentTask: "storageAddVolume",
        useTime: 456
    },
    {
        CreatedAt: "2023-11-03T10:26:10.952802+08:00",
        UpdatedAt: "2023-11-03T10:37:23.342318+08:00",
        ID: "2bca3061-2832-4480-a823-feb178ffa365",
        dataType: "db",
        workType: "restore",
        backWorkType: "",
        dataSize: 167026688,
        progress: 10,
        startAt: "2023-11-03T10:26:21.2394+08:00",
        EndAt: "2023-11-03T10:37:23.299278+08:00",
        status: "failed",
        clientId: "891b69d5-f34d-46fb-a6c8-649924f49d07",
        client: {
            CreatedAt: "2023-06-06T14:54:50.841871+08:00",
            UpdatedAt: "2023-10-30T10:45:37.018827+08:00",
            ID: "891b69d5-f34d-46fb-a6c8-649924f49d07",
            name: "centos7-12-54"
        },
        storageId: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
        storage: {
            CreatedAt: "2023-06-12T10:03:49.007988+08:00",
            UpdatedAt: "2023-06-24T09:52:33.017291+08:00",
            ID: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
            ip: {
                default: "192.168.12.55"
            },
            name: "centos7-12-55",
            protocol: [
                {
                    Category: "iscsi",
                    Identifier: ["iqn.2023-03.com.centos7-12-55:tgt1"]
                }
            ],
            os: "centos",
            osVersion: "7.9.2009",
            version: "2.0.0",
            replicationIp: "",
            status: "offline",
            extendInfo: null,
            domainId: "1",
            storagePools: null,
            arch: "amd64",
            hostName: "centos7-12-55",
            checkTime: "2023-06-24T09:50:19.727472+08:00"
        },
        dataSourceId: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
        dataSource: {
            CreatedAt: "2023-10-10T16:19:55.701896+08:00",
            UpdatedAt: "2023-11-03T14:28:55.984114+08:00",
            ID: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
            name: "db2inst2"
        },
        dataSourceType: "db2",
        total: "",
        finished: "",
        percentage: "",
        pid: "",
        vCenterId: 0,
        vmDataCenterId: 0,
        vmHostId: 0,
        vmHost: {
            ID: 0,
            CreatedAt: "0001-01-01T00:00:00Z",
            UpdatedAt: "0001-01-01T00:00:00Z",
            name: "",
            version: "",
            host: "",
            initiator: null,
            desc: "",
            vCenterId: 0,
            vCenterIp: "",
            dataCenterId: 0,
            dataCenterName: "",
            virtualMachines: 0,
            dataStore: null
        },
        dataSourceCount: 2,
        complete: 0,
        hasChildren: false,
        parentId: "",
        childStatus: true,
        childDesc: "",
        taskType: "resourceRecover",
        currentTask: "storageAddVolume",
        useTime: 662
    },
    {
        CreatedAt: "2023-11-03T10:23:29.724694+08:00",
        UpdatedAt: "2023-11-03T10:24:35.479987+08:00",
        ID: "6ddd691c-d45f-4317-b035-df4059d34afc",
        dataType: "db",
        workType: "restore",
        backWorkType: "",
        dataSize: 167026688,
        progress: 10,
        startAt: "2023-11-03T10:23:32.010388+08:00",
        EndAt: "2023-11-03T10:24:35.475873+08:00",
        status: "failed",
        clientId: "891b69d5-f34d-46fb-a6c8-649924f49d07",
        client: {
            CreatedAt: "2023-06-06T14:54:50.841871+08:00",
            UpdatedAt: "2023-10-30T10:45:37.018827+08:00",
            ID: "891b69d5-f34d-46fb-a6c8-649924f49d07",
            name: "centos7-12-54"
        },
        storageId: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
        storage: {
            CreatedAt: "2023-06-12T10:03:49.007988+08:00",
            UpdatedAt: "2023-06-24T09:52:33.017291+08:00",
            ID: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
            ip: {
                default: "192.168.12.55"
            },
            name: "centos7-12-55",
            protocol: [
                {
                    Category: "iscsi",
                    Identifier: ["iqn.2023-03.com.centos7-12-55:tgt1"]
                }
            ],
            os: "centos",
            osVersion: "7.9.2009",
            version: "2.0.0",
            replicationIp: "",
            status: "offline",
            extendInfo: null,
            domainId: "1",
            storagePools: null,
            arch: "amd64",
            hostName: "centos7-12-55",
            checkTime: "2023-06-24T09:50:19.727472+08:00"
        },
        dataSourceId: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
        dataSource: {
            CreatedAt: "2023-10-10T16:19:55.701896+08:00",
            UpdatedAt: "2023-11-03T14:28:55.984114+08:00",
            ID: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
            name: "db2inst2"
        },
        dataSourceType: "db2",
        total: "",
        finished: "",
        percentage: "",
        pid: "",
        vCenterId: 0,
        vmDataCenterId: 0,
        vmHostId: 0,
        vmHost: {
            ID: 0,
            CreatedAt: "0001-01-01T00:00:00Z",
            UpdatedAt: "0001-01-01T00:00:00Z",
            name: "",
            version: "",
            host: "",
            initiator: null,
            desc: "",
            vCenterId: 0,
            vCenterIp: "",
            dataCenterId: 0,
            dataCenterName: "",
            virtualMachines: 0,
            dataStore: null
        },
        dataSourceCount: 2,
        complete: 0,
        hasChildren: false,
        parentId: "",
        childStatus: true,
        childDesc: "",
        taskType: "restore",
        currentTask: "storageAddVolume",
        useTime: 63
    },
    {
        CreatedAt: "2023-11-03T10:21:31.699654+08:00",
        UpdatedAt: "2023-11-03T10:21:32.114162+08:00",
        ID: "240b0780-0391-4f7f-93e6-d02e845b0590",
        dataType: "db",
        workType: "restore",
        backWorkType: "",
        dataSize: 167026688,
        progress: 10,
        startAt: "2023-11-03T10:21:32.011567+08:00",
        EndAt: "2023-11-03T10:21:32.11018+08:00",
        status: "failed",
        clientId: "d42ba364-41d1-4ae5-81ec-b6812b6b839a",
        client: {
            CreatedAt: "2023-08-02T11:19:56.694079+08:00",
            UpdatedAt: "2023-09-19T11:19:28.013074+08:00",
            ID: "d42ba364-41d1-4ae5-81ec-b6812b6b839a",
            name: "sle12-sp5-12-61"
        },
        storageId: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
        storage: {
            CreatedAt: "2023-06-12T10:03:49.007988+08:00",
            UpdatedAt: "2023-06-24T09:52:33.017291+08:00",
            ID: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
            ip: {
                default: "192.168.12.55"
            },
            name: "centos7-12-55",
            protocol: [
                {
                    Category: "iscsi",
                    Identifier: ["iqn.2023-03.com.centos7-12-55:tgt1"]
                }
            ],
            os: "centos",
            osVersion: "7.9.2009",
            version: "2.0.0",
            replicationIp: "",
            status: "offline",
            extendInfo: null,
            domainId: "1",
            storagePools: null,
            arch: "amd64",
            hostName: "centos7-12-55",
            checkTime: "2023-06-24T09:50:19.727472+08:00"
        },
        dataSourceId: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
        dataSource: {
            CreatedAt: "2023-10-10T16:19:55.701896+08:00",
            UpdatedAt: "2023-11-03T14:28:55.984114+08:00",
            ID: "03b3a9f1-4e63-43f4-bec0-7fc8722afc4e",
            name: "db2inst2"
        },
        dataSourceType: "db2",
        total: "",
        finished: "",
        percentage: "",
        pid: "",
        vCenterId: 0,
        vmDataCenterId: 0,
        vmHostId: 0,
        vmHost: {
            ID: 0,
            CreatedAt: "0001-01-01T00:00:00Z",
            UpdatedAt: "0001-01-01T00:00:00Z",
            name: "",
            version: "",
            host: "",
            initiator: null,
            desc: "",
            vCenterId: 0,
            vCenterIp: "",
            dataCenterId: 0,
            dataCenterName: "",
            virtualMachines: 0,
            dataStore: null
        },
        dataSourceCount: 2,
        complete: 0,
        hasChildren: false,
        parentId: "",
        childStatus: true,
        childDesc: "",
        taskType: "restore",
        currentTask: "storageAddVolume",
        useTime: 0
    },
    {
        CreatedAt: "2023-11-03T10:20:36.212519+08:00",
        UpdatedAt: "2023-11-03T10:40:02.415231+08:00",
        ID: "0368fee7-a4f6-4227-9a14-7f04f10d1764",
        dataType: "db",
        workType: "restore",
        backWorkType: "",
        dataSize: 3995074560,
        progress: 10,
        startAt: "2023-11-03T10:20:42.011484+08:00",
        EndAt: "2023-11-03T10:21:42.374318+08:00",
        status: "failed",
        clientId: "b93c4344-067a-4b2c-9693-c62cc840ce93",
        client: {
            CreatedAt: "2023-06-06T14:54:50.009068+08:00",
            UpdatedAt: "2023-09-14T17:22:27.011581+08:00",
            ID: "b93c4344-067a-4b2c-9693-c62cc840ce93",
            name: "centos7-12-41"
        },
        storageId: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
        storage: {
            CreatedAt: "2023-06-12T10:03:49.007988+08:00",
            UpdatedAt: "2023-06-24T09:52:33.017291+08:00",
            ID: "9cd65d1f-8c9f-490c-8730-de690a2aef1d",
            ip: {
                default: "192.168.12.55"
            },
            name: "centos7-12-55",
            protocol: [
                {
                    Category: "iscsi",
                    Identifier: ["iqn.2023-03.com.centos7-12-55:tgt1"]
                }
            ],
            os: "centos",
            osVersion: "7.9.2009",
            version: "2.0.0",
            replicationIp: "",
            status: "offline",
            extendInfo: null,
            domainId: "1",
            storagePools: null,
            arch: "amd64",
            hostName: "centos7-12-55",
            checkTime: "2023-06-24T09:50:19.727472+08:00"
        },
        dataSourceId: "7077a1fc-7c60-4066-9b12-a92a04eae3a6",
        dataSource: {
            CreatedAt: "2023-06-13T21:02:57.592344+08:00",
            UpdatedAt: "2023-10-30T10:46:23.092702+08:00",
            ID: "7077a1fc-7c60-4066-9b12-a92a04eae3a6",
            name: "ORCL"
        },
        dataSourceType: "oracle",
        total: "",
        finished: "",
        percentage: "",
        pid: "",
        vCenterId: 0,
        vmDataCenterId: 0,
        vmHostId: 0,
        vmHost: {
            ID: 0,
            CreatedAt: "0001-01-01T00:00:00Z",
            UpdatedAt: "0001-01-01T00:00:00Z",
            name: "",
            version: "",
            host: "",
            initiator: null,
            desc: "",
            vCenterId: 0,
            vCenterIp: "",
            dataCenterId: 0,
            dataCenterName: "",
            virtualMachines: 0,
            dataStore: null
        },
        dataSourceCount: 0,
        complete: 0,
        hasChildren: false,
        parentId: "",
        childStatus: true,
        childDesc: "",
        taskType: "resourceRecover",
        currentTask: "storageDeleteMap",
        useTime: 60
    }
]);
</script>
<style>
.el-card__header {
    padding: 10px 10px !important;
}
</style>
